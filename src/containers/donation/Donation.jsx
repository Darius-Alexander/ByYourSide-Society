// filepath: c:\Users\dariu\OneDrive\Desktop\byyoursidesociety\src\containers\donation\Donation.jsx
import React, { useState } from 'react'
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

      </div>
    </div>
  )
}

export default Donation