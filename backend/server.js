require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS with explicit OPTIONS handling
const corsOptions = {
  origin: ['https://byyoursidesociety.org', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
// Use express.json() for parsing JSON request bodies
app.use(express.json());

const stripeKey = process.env.STRIPE_SECRET_KEY;

if (!stripeKey) {
  console.error('ERROR: STRIPE_SECRET_KEY not found in .env');
  process.exit(1);
}

const stripe = new Stripe(stripeKey);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'Server is running' });
});

// Create payment intent
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'cad', email } = req.body;
    console.log('Creating PaymentIntent:', { amount, currency, email });

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      receipt_email: email,
      automatic_payment_methods: { enabled: true }
    });

    return res.status(200).json({
      clientSecret: paymentIntent.client_secret
    });

  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    return res.status(500).json({
      error: error.message || 'Internal server error'
    });
  }
});

app.get('*', (_req, res) => {
  res.status(404).json({
    error: 'Not found. Use POST /api/create-payment-intent'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});