import { useState } from 'react'
import './donation.css'
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const donationAmounts = [5, 10, 25, 50, 100];

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [email, setEmail] = useState('');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [successAmount, setSuccessAmount] = useState(0);
  const [successEmail, setSuccessEmail] = useState('');
  const [cardComplete, setCardComplete] = useState(false);

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
      const backendURL = process.env.REACT_APP_BACKEND_URL || 'https://byyourside-api.onrender.com';
      const res = await fetch(`${backendURL}/api/create-payment-intent`, {
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
        let errorMessage = result.error.message;
        if (errorMessage.toLowerCase().includes('test card') || errorMessage.toLowerCase().includes('live key') || errorMessage.toLowerCase().includes('live mode')) {
          errorMessage = 'Your card was declined. Please try a different payment method.';
        }
        setError(errorMessage);
      } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
        setSuccess(true);
        setSuccessAmount(amount);
        setSuccessEmail(email);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setProcessing(false);
    }
  };

  const isFormValid = (
    getCurrentAmount() > 0 &&
    email &&
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) &&
    cardComplete &&
    !processing
  );

  const handleDonateAgain = () => {
    setSuccess(false);
    setSuccessAmount(0);
    setSuccessEmail('');
    setSelectedAmount(null);
    setCustomAmount('');
    setEmail('');
    setError(null);
    elements.getElement(CardElement).clear();
  };

  // Show thank you screen if successful
  if (success) {
    return (
      <>
        <div className="donation-thank-you">
          <div className="donation-thank-you-container">
            <div className="donation-thank-you-icon">✓</div>
            <h1>Thank You for Your Donation!</h1>
            <p className="donation-thank-you-message">
              Your generosity means the world to us. Together, we're making a real difference
              in the lives of those in need.
            </p>
            <div className="donation-thank-you-details">
              <div className="donation-detail-item">
                <span>Amount Donated:</span>
                <strong>${successAmount.toFixed(2)}</strong>
              </div>
              <div className="donation-detail-item">
                <span>Receipt Sent To:</span>
                <strong>{successEmail}</strong>
              </div>
            </div>
            <p className="donation-thank-you-receipt">
              A detailed receipt has been sent to your email address.
            </p>
            <div className="donation-thank-you-buttons">
              <button
                className="donation-btn-primary"
                onClick={handleDonateAgain}
              >
                Donate Again
              </button>
              <a href="/" className="donation-btn-secondary">
                Return Home
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

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
              value={customAmount === '' ? undefined : customAmount}
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
            <CardElement
              options={{ style: { base: { fontSize: '16px' } } }}
              onChange={e => setCardComplete(e.complete)}
            />
          </div>
        </div>
        {error && <div className="donation-error">{error}</div>}
        {success && <div className="donation-success">{success}</div>}
        <button
          type="submit"
          className="byyourside_donation-submit"
          disabled={!isFormValid}
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