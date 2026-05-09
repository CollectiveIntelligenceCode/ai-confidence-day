import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

// Read raw body from request stream
function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

async function createHubSpotContact(data) {
  const { email, fullName, businessName, phone, country, teamSize, jobRole } = data;
  const [firstName, ...rest] = (fullName || '').split(' ');
  const lastName = rest.join(' ');

  const payload = {
    properties: {
      email,
      firstname: firstName || '',
      lastname: lastName || '',
      company: businessName || '',
      phone: phone || '',
      country: country || '',
      num_employees: teamSize || '',
      jobtitle: jobRole || '',
      hs_lead_status: 'NEW',
      lifecyclestage: 'customer',
    },
  };

  const res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    // If contact already exists (409), try to get the existing one
    if (res.status === 409) {
      console.log('Contact already exists, skipping creation.');
      return null;
    }
    throw new Error(`HubSpot contact error: ${res.status} ${text}`);
  }

  return await res.json();
}

async function createHubSpotDeal(contactId, data) {
  const { fullName, businessName, teamSize } = data;

  const dealPayload = {
    properties: {
      dealname: `AI Confidence Day — ${fullName || businessName || 'Applicant'}`,
      amount: '899',
      closedate: new Date('2026-06-19').toISOString(),
      dealstage: 'closedwon',
      pipeline: 'default',
      description: `Team size: ${teamSize || 'unknown'}`,
    },
  };

  const dealRes = await fetch('https://api.hubapi.com/crm/v3/objects/deals', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dealPayload),
  });

  if (!dealRes.ok) {
    const text = await dealRes.text();
    throw new Error(`HubSpot deal error: ${dealRes.status} ${text}`);
  }

  const deal = await dealRes.json();

  // Associate deal with contact
  if (contactId) {
    await fetch(
      `https://api.hubapi.com/crm/v3/objects/deals/${deal.id}/associations/contacts/${contactId}/deal_to_contact`,
      {
        method: 'PUT',
        headers: { Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}` },
      }
    );
  }

  return deal;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];
  const rawBody = await getRawBody(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature error:', err.message);
    return res.status(400).json({ error: `Webhook error: ${err.message}` });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const meta = session.metadata || {};

    console.log('Payment completed for:', session.customer_email, meta);

    if (HUBSPOT_ACCESS_TOKEN) {
      try {
        const contact = await createHubSpotContact({
          email: session.customer_email,
          ...meta,
        });
        const contactId = contact?.id || null;
        await createHubSpotDeal(contactId, meta);
        console.log('HubSpot contact + deal created.');
      } catch (err) {
        // Log but don't fail — payment already succeeded
        console.error('HubSpot sync error:', err.message);
      }
    } else {
      console.warn('HUBSPOT_ACCESS_TOKEN not set — skipping CRM sync.');
    }
  }

  res.status(200).json({ received: true });
}
