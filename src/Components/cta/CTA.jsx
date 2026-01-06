import React from 'react'
import './cta.css'

const CTA = () => {
  return (
    <div className="byyourside_cta">
      <div className="byyourside_cta-content">
        <p>
          Donate Now and Start Receiving
        </p>
        <h3>
          Your Monthly Impact Today!
        </h3>
      </div>
      <div className="byyourside_cta-btn"> 
        {/* type button ensured button doesn't automatically submit a form when clicked */}
        <button type="button">Donate!</button> 
      </div>
    </div>
  )
}

export default CTA
