import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

// ── Calendar helpers ───────────────────────────────────────────────────────────

const EVENT = {
  title: 'AI Confidence Day for Consultants',
  date: '19th June 2026',
  start: '20260619T080000Z', // 9am BST = 8am UTC
  end:   '20260619T160000Z', // 5pm BST = 4pm UTC
  location: 'Smiths Of Smithfield, 67-77 Charterhouse St, London, EC1M 6HJ',
  description: 'A private, hands-on working day for consultants and small business owners. Chatham House Rules apply.',
};

function buildICS() {
  const uid = `ai-confidence-day-2026-${Date.now()}@collectiveintelligence.co`;
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Collective Intelligence//AI Confidence Day//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTART:${EVENT.start}`,
    `DTEND:${EVENT.end}`,
    `SUMMARY:${EVENT.title}`,
    `LOCATION:${EVENT.location}`,
    `DESCRIPTION:${EVENT.description}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'BEGIN:VALARM',
    'TRIGGER:-PT60M',
    'ACTION:DISPLAY',
    'DESCRIPTION:Reminder',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

function googleCalendarUrl() {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: EVENT.title,
    dates: `${EVENT.start}/${EVENT.end}`,
    details: EVENT.description,
    location: EVENT.location,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

function outlookCalendarUrl() {
  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: EVENT.title,
    startdt: '2026-06-19T09:00:00',
    enddt: '2026-06-19T17:00:00',
    location: EVENT.location,
    body: EVENT.description,
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params}`;
}

// ── Email template ─────────────────────────────────────────────────────────────

function buildWelcomeEmail(firstName) {
  const name = firstName || 'there';
  const google = googleCalendarUrl();
  const outlook = outlookCalendarUrl();

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>You're in — AI Confidence Day</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #f5f2ee; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1a1a1a; }
  .wrap { max-width: 600px; margin: 0 auto; background: #ffffff; }
  .top-bar { height: 4px; background: #c0392b; }
  .header { padding: 40px 48px 32px; border-bottom: 1px solid #e5e2de; }
  .logo { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #888; font-weight: 600; }
  .body { padding: 48px; }
  h1 { font-size: 32px; font-weight: 400; line-height: 1.2; margin-bottom: 20px; color: #1a1a1a; }
  p { font-size: 16px; line-height: 1.7; color: #444; margin-bottom: 16px; }
  .event-card { background: #f5f2ee; border-left: 3px solid #c0392b; padding: 24px 28px; margin: 32px 0; }
  .event-card .label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #c0392b; font-weight: 600; margin-bottom: 12px; }
  .event-row { display: flex; gap: 12px; margin-bottom: 8px; font-size: 15px; color: #1a1a1a; }
  .event-row .key { color: #888; min-width: 80px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; padding-top: 2px; }
  .calendar-section { margin: 32px 0; padding: 28px; border: 1px solid #e5e2de; }
  .calendar-section p { font-size: 14px; color: #666; margin-bottom: 20px; }
  .cal-links { display: flex; gap: 12px; flex-wrap: wrap; }
  .cal-btn { display: inline-block; padding: 10px 20px; border: 1px solid #1a1a1a; font-size: 13px; color: #1a1a1a; text-decoration: none; letter-spacing: 0.5px; font-weight: 500; }
  .cal-btn.primary { background: #c0392b; color: #ffffff; border-color: #c0392b; }
  .divider { border: none; border-top: 1px solid #e5e2de; margin: 32px 0; }
  .what-to-bring { margin: 32px 0; }
  .what-to-bring h2 { font-size: 18px; font-weight: 500; margin-bottom: 16px; }
  .what-to-bring ul { padding-left: 20px; }
  .what-to-bring li { font-size: 15px; line-height: 1.7; color: #444; margin-bottom: 6px; }
  .footer { padding: 32px 48px; border-top: 1px solid #e5e2de; background: #f5f2ee; }
  .footer p { font-size: 12px; color: #888; line-height: 1.6; margin-bottom: 0; }
  .footer a { color: #c0392b; text-decoration: none; }
</style>
</head>
<body>
<div class="wrap">
  <div class="top-bar"></div>

  <div class="header">
    <div class="logo">Collective Intelligence &amp; Solved Together</div>
  </div>

  <div class="body">
    <h1>You're in, ${name}.</h1>

    <p>Your place at <strong>AI Confidence Day for Consultants &amp; Small Business Owners</strong> is confirmed. We are looking forward to spending the day with you.</p>

    <div class="event-card">
      <div class="label">Your event details</div>
      <div class="event-row"><span class="key">Date</span><strong>19th June 2026</strong></div>
      <div class="event-row"><span class="key">Time</span><strong>9:00am – 5:00pm BST</strong></div>
      <div class="event-row"><span class="key">Venue</span><strong>Smiths Of Smithfield</strong></div>
      <div class="event-row"><span class="key"></span>67-77 Charterhouse St, London, EC1M 6HJ</div>
    </div>

    <div class="calendar-section">
      <p>Add the day to your calendar so it is locked in.</p>
      <div class="cal-links">
        <a href="${google}" class="cal-btn primary" target="_blank">+ Google Calendar</a>
        <a href="${outlook}" class="cal-btn" target="_blank">+ Outlook</a>
      </div>
      <p style="margin-top:16px; font-size:13px; color:#888;">Apple Calendar users: open the .ics file attached to this email.</p>
    </div>

    <hr class="divider" />

    <p>Watch out for emails from us with more detailed instructions closer to the day.</p>

    <p>If you have any questions in the meantime, reply to this email or reach us at <a href="mailto:aiconfidence@collectiveintelligence.co">aiconfidence@collectiveintelligence.co</a>.</p>

    <p>See you on the 19th.</p>

    <p style="margin-top:32px;"><strong>Chris Bradshaw</strong><br />
    <span style="color:#888; font-size:14px;">Collective Intelligence &amp; Solved Together</span></p>
  </div>

  <div class="footer">
    <p>You are receiving this because you registered for AI Confidence Day for Consultants &amp; Small Business Owners on 19th June 2026.<br />
    Questions? <a href="mailto:aiconfidence@collectiveintelligence.co">aiconfidence@collectiveintelligence.co</a></p>
  </div>
</div>
</body>
</html>`;
}

// ── Send welcome email via Resend ──────────────────────────────────────────────

async function sendWelcomeEmail(email, fullName) {
  if (!RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not set — skipping welcome email.');
    return;
  }

  const [firstName] = (fullName || '').split(' ');
  const icsContent = buildICS();
  const icsBase64 = Buffer.from(icsContent).toString('base64');

  const payload = {
    from: 'AI Confidence Day <aiconfidence@collectiveintelligence.co>',
    to: [email],
    subject: "You're in — AI Confidence Day, 19th June 2026",
    html: buildWelcomeEmail(firstName),
    attachments: [
      {
        filename: 'ai-confidence-day.ics',
        content: icsBase64,
        content_type: 'text/calendar',
      },
    ],
  };

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Resend error: ${res.status} ${text}`);
  }

  const data = await res.json();
  console.log('Welcome email sent:', data.id);
  return data;
}

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
    const email = session.customer_email || session.customer_details?.email;

    console.log('Payment completed for:', email, meta);

    if (!email) {
      console.error('No email found on session — skipping email and HubSpot.');
      return res.status(200).json({ received: true });
    }

    // 1. Send branded welcome email
    try {
      await sendWelcomeEmail(email, meta.fullName);
    } catch (err) {
      console.error('Welcome email error:', err.message);
    }

    // 2. Sync to HubSpot
    if (HUBSPOT_ACCESS_TOKEN) {
      try {
        const contact = await createHubSpotContact({
          email,
          ...meta,
        });
        const contactId = contact?.id || null;
        await createHubSpotDeal(contactId, meta);
        console.log('HubSpot contact + deal created.');
      } catch (err) {
        console.error('HubSpot sync error:', err.message);
      }
    } else {
      console.warn('HUBSPOT_ACCESS_TOKEN not set — skipping CRM sync.');
    }
  }

  res.status(200).json({ received: true });
}
