import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const BASE_URL = process.env.BASE_URL || 'https://aiday.solvedtogether.co.uk';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    email,
    fullName,
    businessName,
    country,
    phone,
    teamSize,
    jobRole,
    aiUseCurrently,
    agreedToTerms,
    source,
  } = req.body;

  if (!email || !fullName || !agreedToTerms) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const isCXO = source === 'cxo-apply-form';

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: isCXO ? 'AI Confidence Day for CXOs & Board Members' : 'AI Confidence Day for Consultants',
              description: isCXO
                ? '3rd July 2026 · London · Full-Day Workshop (Early Bird)'
                : '19th June 2026 · London · Full-Day Workshop (Early Bird)',
            },
            unit_amount: 50, // £0.50 live test — change to 89900 for production
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      metadata: {
        fullName,
        businessName: businessName || '',
        country: country || '',
        phone: phone || '',
        teamSize: teamSize || '',
        jobRole: jobRole || '',
        // Stripe metadata values max 500 chars
        aiUseCurrently: (aiUseCurrently || '').slice(0, 500),
        source: source || 'consultants-apply-form',
      },
      success_url: `${BASE_URL}/thank-you/${isCXO ? 'cxo' : 'consultants'}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/apply/${isCXO ? 'cxo' : 'consultants'}`,
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
}
