import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const BASE_URL = process.env.BASE_URL || 'https://ai-confidence-day.vercel.app';

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
    agreedToTerms,
  } = req.body;

  if (!email || !fullName || !agreedToTerms) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: 'AI Confidence Day for Consultants',
              description: '19th June 2026 · London · Full-Day Workshop (Early Bird)',
            },
            unit_amount: 89900, // £899.00
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
        source: 'consultants-apply-form',
      },
      success_url: `${BASE_URL}/thank-you/consultants?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/apply/consultants`,
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
}
