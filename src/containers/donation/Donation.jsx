import { useState } from 'react'
import './donation.css'
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const donationAmounts = [10, 25, 50, 100, 250];

const stripePromise = loadStripe('pk_test_51STtO0PxUA0N6p7mQuv8gAnyizjOJtMi9zTCUQ3Soty1RKBuqlTYkyfoiu8ylPqHjyH9lEjV6pCLWsJFHhRDFIry00OYUEDUTv'); // TODO: Replace with your Stripe publishable key

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [email, setEmail] = useState('');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    return selectedAmount || parseFloat(customAmount) || 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const amount = getCurrentAmount();
    if (amount <= 0) {
      setError('Please select or enter a donation amount');
      return;
    }
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!stripe || !elements) {
      setError('Stripe is not loaded yet.');
      return;
    }
    setProcessing(true);
    try {
      // 1. Create PaymentIntent on backend
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Math.round(amount * 100), email }) // Send email
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create payment intent');
      const clientSecret = data.clientSecret;
      // 2. Confirm card payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: { email },
        }
      });
      if (result.error) {
        setError(result.error.message);
      } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
        setSuccess('Thank you! Your donation was successful.');
        setSelectedAmount(null);
        setCustomAmount('');
        setEmail('');
        elements.getElement(CardElement).clear();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form className="byyourside_donation section_padding gradient_bg" onSubmit={handleSubmit}>
      <div className="byyourside_donation-content">
        <div className="byyourside_donation-header">
          <h1 className="gradient_text">Make a Donation</h1>
          <p>
            Your generosity helps us continue our mission of uplifting the less 
            fortunate in Vancouver and the lower mainland. Every dollar makes a difference.
          </p>
        </div>
        <div className="byyourside_donation-amounts">
          <h3>Select an amount</h3>
          <div className="byyourside_donation-amounts_buttons">
            {donationAmounts.map((amount) => (
              <button
                type="button"
                key={amount}
                className={`donation-amount-btn ${selectedAmount === amount ? 'selected' : ''}`}
                onClick={() => handleAmountSelect(amount)}
                disabled={processing}
              >
                ${amount}
              </button>
            ))}
          </div>
        </div>
        <div className="byyourside_donation-custom">
          <h3>Or enter a custom amount</h3>
          <div className="byyourside_donation-custom_input">
            <span>$</span>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="Enter amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              disabled={processing}
            />
          </div>
        </div>
        <div className="byyourside_donation-email">
          <h3>Email for receipt</h3>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={processing}
            required
          />
        </div>
        <div className="byyourside_donation-summary">
          <p>Donation amount: <strong>${getCurrentAmount().toFixed(2)}</strong></p>
        </div>
        <div className="byyourside_donation-card">
          <h3>Card Details</h3>
          <div className="byyourside_donation-card_input">
            <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
          </div>
        </div>
        {error && <div className="donation-error">{error}</div>}
        {success && <div className="donation-success">{success}</div>}
        <button 
          type="submit"
          className="byyourside_donation-submit"
          disabled={getCurrentAmount() <= 0 || processing}
        >
          {processing ? 'Processing...' : `Donate $${getCurrentAmount().toFixed(2)}`}
        </button>
      </div>
    </form>
  );
};

const Donation = () => (
  <Elements stripe={stripePromise}>
    <DonationForm />
  </Elements>
);

export default Donation