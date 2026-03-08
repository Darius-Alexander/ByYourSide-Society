// ============================================
// 1. IMPORT REQUIRED PACKAGES
// ============================================
// These are like tools we're bringing into our project
const express = require('express');        // The web server framework
const cors = require('cors');              // Allows requests from different domains
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);  // Stripe payment library

// ============================================
// 2. CREATE THE EXPRESS APP
// ============================================
// This creates our server instance
const app = express();

// Get the port from environment variables, or use 5000 if not set
const PORT = process.env.PORT || 5000;

// ============================================
// 3. MIDDLEWARE (Request preprocessing)
// ============================================
// Middleware runs BEFORE your routes handle requests
// Think of it like a checkpoint that processes incoming data

// CORS: Allows requests from your frontend (different domain)
// Without this, your React app (localhost:3000) can't talk to your server (localhost:5000)
app.use(cors());

// Express.json(): Converts incoming JSON data into JavaScript objects
// This makes it easy to read data sent from your frontend
app.use(express.json());

// ============================================
// 4. ROUTES (Handle different requests)
// ============================================
// Routes are like endpoints - they listen for specific requests and respond

// Health Check Endpoint
// Purpose: Verify the server is running
// Used by: Monitoring services (like Render) to check if your server is alive
app.get('/api/health', (req, res) => {
  // req = the incoming request
  // res = the response we send back
  res.json({ status: 'Server is running' });
});

// Create Payment Intent Endpoint
// Purpose: Securely create a Stripe payment intent
// Used by: Your React donation form
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    // Extract data sent from the frontend
    // amount: how much to charge (in cents)
    // currency: payment currency (default: USD)
    // email: donor's email for receipt
    const { amount, currency = 'usd', email } = req.body;

    // Validate that we received an amount
    if (!amount || !email) {
      return res.status(400).json({ error: 'Amount and email are required' });
    }

    // Call Stripe API to create a payment intent
    // This tells Stripe: "A user wants to pay $X, here's their email"
    // Stripe responds with a clientSecret we send back to the frontend
    const paymentIntent = await stripe.paymentIntents.create({
      amount,           // Amount in cents (e.g., 500 = $5.00)
      currency,         // Currency code (e.g., 'usd')
      receipt_email: email,  // Stripe will email a receipt to this address
    });

    // Send back the clientSecret
    // The frontend uses this to confirm the payment with the user's card
    res.status(200).json({ clientSecret: paymentIntent.client_secret });

  } catch (error) {
    // If anything goes wrong (API error, validation error, etc.)
    console.error('Stripe API error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// 5. START THE SERVER
// ============================================
// Listen on the specified port and start accepting requests
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Stripe endpoint: POST http://localhost:${PORT}/api/create-payment-intent`);
});
