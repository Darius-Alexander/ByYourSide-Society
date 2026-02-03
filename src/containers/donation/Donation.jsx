import { useState } from 'react'
import './donation.css'

const donationAmounts = [10, 25, 50, 100, 250];

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(''); // Clear custom input when preset is selected
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null); // Deselect preset buttons when typing custom amount
  };

  // Returns the current donation amount (either preset or custom)
  const getCurrentAmount = () => {
    return selectedAmount || parseFloat(customAmount) || 0;
  };

  // Placeholder submit handler (Stripe integration comes later)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    const amount = getCurrentAmount();
    if (amount <= 0) {
      alert('Please select or enter a donation amount');
      return;
    }
    alert(`Thank you! Your donation of $${amount} would be processed here.`);
  };

  return (
    <div className="byyourside_donation section_padding">
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
            />
          </div>
        </div>

        <div className="byyourside_donation-summary">
          <p>Donation amount: <strong>${getCurrentAmount().toFixed(2)}</strong></p>
        </div>

        <button 
          type="button"
          className="byyourside_donation-submit"
          onClick={handleSubmit}
          disabled={getCurrentAmount() <= 0}
        >
          Donate ${getCurrentAmount().toFixed(2)}
        </button>

      </div>
    </div>
  )
}

export default Donation