import React from 'react'
import './possibility.css'
import impact from '../../assets/donation-impact.png'

const Possibility = () => {
  return (
    <div className="byyourside_possibility section_padding" id="donate">
      <div className="byyourside_possibility-image">
        <img src={impact} alt="donation impact" />
      </div>
      <div className="byyourside_possibility-content">
        <h4>
          Make a Difference Today!
        </h4>
        <h1 className="gradient_text">
          Your Contribution Matters
        </h1>
        <p>
          Every donation, big or small, fuels our mission to uplift the less 
          fortunate in Vancouver and the lower mainland. Join us in creating 
          lasting change and empowering our community for a brighter tomorrow.
        </p>
        <button type="button">Donate Now</button>
      </div>
    </div>
  )
}

export default Possibility
