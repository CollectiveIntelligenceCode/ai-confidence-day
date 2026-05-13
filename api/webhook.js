import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

// ── Calendar helpers ───────────────────────────────────────────────────────────

const EVENTS = {
  consultants: {
    title: 'AI Confidence Day for Consultants & Small Business Owners',
    start: '20260619T080000Z',
    end:   '20260619T160000Z',
    startdt: '2026-06-19T09:00:00',
    enddt:   '2026-06-19T17:00:00',
    location: 'Smiths of Smithfield, 67-77 Charterhouse St, London, EC1M 6HJ',
    description: 'A private, hands-on working day for consultants and small business owners.',
    date: '19th June 2026',
    seeYou: '19th',
  },
  cxo: {
    title: 'AI Confidence Day for CXOs & Board Members',
    start: '20260703T080000Z',
    end:   '20260703T160000Z',
    startdt: '2026-07-03T09:00:00',
    enddt:   '2026-07-03T17:00:00',
    location: 'Smiths of Smithfield, 67-77 Charterhouse St, London, EC1M 6HJ',
    description: 'A private, hands-on working day for CXOs and board members.',
    date: '3rd July 2026',
    seeYou: '3rd',
  },
};

function buildICS(event) {
  const uid = `ai-confidence-day-2026-${Date.now()}@solvedtogether.co.uk`;
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Collective Intelligence//AI Confidence Day//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTART:${event.start}`,
    `DTEND:${event.end}`,
    `SUMMARY:${event.title}`,
    `LOCATION:${event.location}`,
    `DESCRIPTION:${event.description}`,
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

function googleCalendarUrl(event) {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${event.start}/${event.end}`,
    details: event.description,
    location: event.location,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

function outlookCalendarUrl(event) {
  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: event.title,
    startdt: event.startdt,
    enddt: event.enddt,
    location: event.location,
    body: event.description,
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params}`;
}

// ── Email templates ────────────────────────────────────────────────────────────

const EMAIL_STYLES = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #f5f2ee; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1a1a1a; }
  .wrap { max-width: 600px; margin: 0 auto; background: #ffffff; }
  .top-bar { height: 4px; background: #c0392b; }
  .header { padding: 32px 48px; border-bottom: 1px solid #e5e2de; display: flex; align-items: center; gap: 24px; }
  .body { padding: 48px; }
  h1 { font-size: 32px; font-weight: 400; line-height: 1.2; margin-bottom: 20px; color: #1a1a1a; }
  p { font-size: 16px; line-height: 1.7; color: #444; margin-bottom: 16px; }
  .event-card { background: #f5f2ee; border-left: 3px solid #c0392b; padding: 24px 28px; margin: 32px 0; }
  .event-card .label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #c0392b; font-weight: 600; margin-bottom: 12px; }
  .event-row { display: flex; gap: 12px; margin-bottom: 8px; font-size: 15px; color: #1a1a1a; }
  .event-row .key { color: #888; min-width: 80px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; padding-top: 2px; }
  .calendar-section { margin: 32px 0; padding: 28px; border: 1px solid #e5e2de; }
  .cal-links { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 16px; }
  .cal-btn { display: inline-block; padding: 10px 20px; border: 1px solid #1a1a1a; font-size: 13px; color: #1a1a1a; text-decoration: none; letter-spacing: 0.5px; font-weight: 500; }
  .cal-btn.primary { background: #c0392b; color: #ffffff; border-color: #c0392b; }
  .divider { border: none; border-top: 1px solid #e5e2de; margin: 32px 0; }
  .footer { padding: 32px 48px; border-top: 1px solid #e5e2de; background: #f5f2ee; }
  .footer p { font-size: 12px; color: #888; line-height: 1.6; margin-bottom: 0; }
  .footer a { color: #c0392b; text-decoration: none; }
`;

function buildConsultantsEmail(firstName) {
  const name = firstName || 'there';
  const event = EVENTS.consultants;
  const google = googleCalendarUrl(event);
  const outlook = outlookCalendarUrl(event);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>You're in — AI Confidence Day, 19th June 2026</title>
<style>${EMAIL_STYLES}</style>
</head>
<body>
<div class="wrap">
  <div class="top-bar"></div>

  <table width="600" cellpadding="0" cellspacing="0" border="0" style="border-bottom:1px solid #e5e2de;">
    <tr>
      <td style="background:#ffffff; padding:24px 32px; vertical-align:middle;">
        <img src="https://ai-confidence-day.vercel.app/logo-ci-dark.png" alt="Collective Intelligence" height="40" style="display:block;" />
      </td>
      <td style="background:#ffffff; padding:24px 32px; vertical-align:middle; text-align:right;">
        <img src="https://ai-confidence-day.vercel.app/logo-solved-together.png" alt="Solved Together" height="40" style="display:block; margin-left:auto;" />
      </td>
    </tr>
  </table>

  <div class="body">
    <h1>You're in, ${name}.</h1>

    <p>Your place at <strong>AI Confidence Day for Consultants &amp; Small Business Owners</strong> is confirmed. We are looking forward to spending the day with you.</p>

    <p>This is the day you go from saving AI guides you never go back to — to actually building things you use the next morning.</p>

    <div class="event-card">
      <div class="label">Your event details</div>
      <div class="event-row"><span class="key">Date</span><strong>19th June 2026</strong></div>
      <div class="event-row"><span class="key">Time</span><strong>9:00am – 5:00pm BST</strong></div>
      <div class="event-row"><span class="key">Venue</span><strong>Smiths of Smithfield</strong></div>
      <div class="event-row"><span class="key"></span>67–77 Charterhouse St, London, EC1M 6HJ</div>
    </div>

    <div class="calendar-section">
      <p style="margin-bottom:16px;">Add the day to your calendar so it is locked in.</p>
      <div class="cal-links">
        <a href="${google}" class="cal-btn primary" target="_blank">+ Google Calendar</a>
        <a href="${outlook}" class="cal-btn" target="_blank">+ Outlook</a>
      </div>
      <p style="font-size:13px; color:#888;">Apple Calendar users: open the .ics file attached to this email.</p>
    </div>

    <hr class="divider" />

    <p>One small favour — please add <a href="mailto:contact@solvedtogether.co.uk">contact@solvedtogether.co.uk</a> to your contacts. We will be in touch with more details closer to the day, and we would rather not end up in your spam folder.</p>

    <p>If you have any questions in the meantime, reply to this email anytime.</p>

    <p>See you on the 19th.</p>

    <p style="margin-top:32px;"><strong>Warmly, Rujuta &amp; Chris</strong></p>
  </div>

  <div class="footer">
    <p style="text-align:center;">You are receiving this because you registered for AI Confidence Day for Consultants &amp; Small Business Owners on 19th June 2026.<br />
    Questions? <a href="mailto:contact@solvedtogether.co.uk">contact@solvedtogether.co.uk</a></p>
  </div>
</div>
</body>
</html>`;
}

function buildCXOEmail(firstName) {
  const name = firstName || 'there';
  const event = EVENTS.cxo;
  const google = googleCalendarUrl(event);
  const outlook = outlookCalendarUrl(event);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>You're in — AI Confidence Day, 3rd July 2026</title>
<style>${EMAIL_STYLES}</style>
</head>
<body>
<div class="wrap">
  <div class="top-bar"></div>

  <table width="600" cellpadding="0" cellspacing="0" border="0" style="border-bottom:1px solid #e5e2de;">
    <tr>
      <td style="background:#ffffff; padding:24px 32px; vertical-align:middle;">
        <img src="https://ai-confidence-day.vercel.app/logo-ci-dark.png" alt="Collective Intelligence" height="40" style="display:block;" />
      </td>
      <td style="background:#ffffff; padding:24px 32px; vertical-align:middle; text-align:right;">
        <img src="https://ai-confidence-day.vercel.app/logo-solved-together.png" alt="Solved Together" height="40" style="display:block; margin-left:auto;" />
      </td>
    </tr>
  </table>

  <div class="body">
    <h1>You're in, ${name}.</h1>

    <p>Your place at <strong>AI Confidence Day for CXOs &amp; Board Members</strong> is confirmed. We are looking forward to spending the day with you.</p>

    <div class="event-card">
      <div class="label">Your event details</div>
      <div class="event-row"><span class="key">Date</span><strong>3rd July 2026</strong></div>
      <div class="event-row"><span class="key">Time</span><strong>9:00am – 5:00pm BST</strong></div>
      <div class="event-row"><span class="key">Venue</span><strong>Smiths of Smithfield</strong></div>
      <div class="event-row"><span class="key"></span>67–77 Charterhouse St, London, EC1M 6HJ</div>
    </div>

    <div class="calendar-section">
      <p style="margin-bottom:16px;">Add the day to your calendar so it is locked in.</p>
      <div class="cal-links">
        <a href="${google}" class="cal-btn primary" target="_blank">+ Google Calendar</a>
        <a href="${outlook}" class="cal-btn" target="_blank">+ Outlook</a>
      </div>
      <p style="font-size:13px; color:#888;">Apple Calendar users: open the .ics file attached to this email.</p>
    </div>

    <hr class="divider" />

    <p>One small favour — please add <a href="mailto:contact@solvedtogether.co.uk">contact@solvedtogether.co.uk</a> to your contacts. We will be in touch with more details closer to the day, and we would rather not end up in your spam folder.</p>

    <p>If you have any questions in the meantime, reply to this email anytime.</p>

    <p>See you on the 3rd.</p>

    <p style="margin-top:32px;"><strong>Warmly, Rujuta &amp; Chris</strong></p>
  </div>

  <div class="footer">
    <p style="text-align:center;">You are receiving this because you registered for AI Confidence Day for CXOs &amp; Board Members on 3rd July 2026.<br />
    Questions? <a href="mailto:contact@solvedtogether.co.uk">contact@solvedtogether.co.uk</a></p>
  </div>
</div>
</body>
</html>`;
}

// ── Send welcome email via Resend ──────────────────────────────────────────────

async function sendWelcomeEmail(email, fullName, source) {
  if (!RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not set — skipping welcome email.');
    return;
  }

  const [firstName] = (fullName || '').split(' ');
  const isCXO = source === 'cxo-apply-form';
  const event = isCXO ? EVENTS.cxo : EVENTS.consultants;
  const icsContent = buildICS(event);
  const icsBase64 = Buffer.from(icsContent).toString('base64');
  const subject = isCXO
    ? "You're in — AI Confidence Day, 3rd July 2026"
    : "You're in — AI Confidence Day, 19th June 2026";
  const html = isCXO ? buildCXOEmail(firstName) : buildConsultantsEmail(firstName);

  const payload = {
    from: 'AI Confidence Day <contact@solvedtogether.co.uk>',
    to: [email],
    subject,
    html,
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

// Support both legacy API keys (UUID) and Private App tokens (pat-...)
function hubspotUrl(path) {
  const isLegacyKey = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(HUBSPOT_ACCESS_TOKEN);
  const base = `https://api.hubapi.com${path}`;
  return isLegacyKey ? `${base}?hapikey=${HUBSPOT_ACCESS_TOKEN}` : base;
}

function hubspotHeaders() {
  const isLegacyKey = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(HUBSPOT_ACCESS_TOKEN);
  return {
    ...(isLegacyKey ? {} : { Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}` }),
    'Content-Type': 'application/json',
  };
}

async function createHubSpotContact(data) {
  const { email, fullName, businessName, phone, country, teamSize, jobRole } = data;
  const [firstName, ...rest] = (fullName || '').split(' ');
  const lastName = rest.join(' ');

  const properties = {
    email,
    firstname: firstName || '',
    lastname: lastName || '',
    company: businessName || '',
    phone: phone || '',
    country: country || '',
    jobtitle: jobRole || '',
    hs_lead_status: 'NEW',
    lifecyclestage: 'customer',
    // Visible standard fields for easy filtering
    website: data.source === 'cxo-apply-form'
      ? 'AI Confidence Day — CXO & Board Members'
      : 'AI Confidence Day — Consultants & Small Business Owners',
    message: teamSize || '',
    ai_confidence_team_size: teamSize || '',
    ai_confidence_ai_usage: data.aiUseCurrently || '',
  };

  const res = await fetch(hubspotUrl('/crm/v3/objects/contacts'), {
    method: 'POST',
    headers: hubspotHeaders(),
    body: JSON.stringify({ properties }),
  });

  if (!res.ok) {
    const text = await res.text();
    if (res.status === 409) {
      console.log('Contact already exists, skipping creation.');
      return null;
    }
    throw new Error(`HubSpot contact error: ${res.status} ${text}`);
  }

  return await res.json();
}

async function logEmailEngagement(contactId, email, source) {
  if (!contactId) return;
  const isCXO = source === 'cxo-apply-form';

  const payload = {
    properties: {
      hs_timestamp: new Date().toISOString(),
      hs_email_direction: 'EMAIL',
      hs_email_status: 'SENT',
      hs_email_subject: isCXO ? "You're in — AI Confidence Day, 3rd July 2026" : "You're in — AI Confidence Day, 19th June 2026",
      hs_email_text: `Automated welcome email sent to ${email} confirming their place at ${isCXO ? 'AI Confidence Day for CXOs & Board Members on 3rd July 2026' : 'AI Confidence Day for Consultants & Small Business Owners on 19th June 2026'}. Includes event details, calendar invite (.ics), and Google/Outlook calendar links.`,
    },
    associations: [
      {
        to: { id: contactId },
        types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 198 }],
      },
    ],
  };

  const res = await fetch(hubspotUrl('/crm/v3/objects/emails'), {
    method: 'POST',
    headers: hubspotHeaders(),
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`HubSpot email log error: ${res.status} ${text}`);
  } else {
    console.log('HubSpot email engagement logged for contact:', contactId);
  }
}

async function createHubSpotNote(contactId, aiUseCurrently) {
  if (!contactId || !aiUseCurrently) return;

  const notePayload = {
    properties: {
      hs_note_body: `AI Confidence Day — Application Answer\n\nQ: What do you use AI for right now, in your day-to-day?\nA: ${aiUseCurrently}`,
      hs_timestamp: new Date().toISOString(),
    },
    associations: [
      {
        to: { id: contactId },
        types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }],
      },
    ],
  };

  const res = await fetch(hubspotUrl('/crm/v3/objects/notes'), {
    method: 'POST',
    headers: hubspotHeaders(),
    body: JSON.stringify(notePayload),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`HubSpot note error: ${res.status} ${text}`);
  } else {
    console.log('HubSpot note created for contact:', contactId);
  }
}

async function createHubSpotDeal(contactId, data) {
  const { fullName, businessName, teamSize } = data;
  const isCXO = data.source === 'cxo-apply-form';

  const dealPayload = {
    properties: {
      dealname: `AI Confidence Day — ${fullName || businessName || 'Applicant'}`,
      amount: '899',
      closedate: new Date(isCXO ? '2026-07-03' : '2026-06-19').toISOString(),
      dealstage: 'closedwon',
      pipeline: 'default',
      description: `Event: ${isCXO ? 'CXO & Board Members (3rd July 2026)' : 'Consultants & Small Business Owners (19th June 2026)'}\nTeam size: ${teamSize || 'unknown'}${data.aiUseCurrently ? `\n\nAI use today:\n${data.aiUseCurrently}` : ''}`,
    },
  };

  const dealRes = await fetch(hubspotUrl('/crm/v3/objects/deals'), {
    method: 'POST',
    headers: hubspotHeaders(),
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
      hubspotUrl(`/crm/v3/objects/deals/${deal.id}/associations/contacts/${contactId}/deal_to_contact`),
      { method: 'PUT', headers: hubspotHeaders() }
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
      await sendWelcomeEmail(email, meta.fullName, meta.source);
    } catch (err) {
      console.error('Welcome email error:', err.message);
    }

    // 2. Sync to HubSpot
    if (HUBSPOT_ACCESS_TOKEN) {
      try {
        console.log('Creating HubSpot contact for:', email);
        const contact = await createHubSpotContact({ email, ...meta });
        const contactId = contact?.id || null;
        console.log('HubSpot contact id:', contactId);
        await logEmailEngagement(contactId, email, meta.source);
        await createHubSpotNote(contactId, meta.aiUseCurrently);
        await createHubSpotDeal(contactId, meta);
        console.log('HubSpot contact + email log + deal created successfully.');
      } catch (err) {
        console.error('HubSpot sync error:', err.message);
      }
    } else {
      console.warn('HUBSPOT_ACCESS_TOKEN not set — skipping CRM sync.');
    }
  }

  res.status(200).json({ received: true });
}
