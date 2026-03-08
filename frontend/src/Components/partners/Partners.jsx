import React from 'react'
import './partners.css'
import { CNH, GVFB, BigBrothers, KrispyKreme, PD} from './imports'

// Need to add partner logo assets to components
const Partners = () => {
  return (
    <div className="byyourside_partners section_padding" id="partners">
      <div>
        <img src={CNH} alt="CNH Logo" />
      </div>
      <div>
        <img src={GVFB} alt="GVFB Logo" />
      </div>
      <div>
        <img src={BigBrothers} alt="Big Brothers Logo" />
      </div>
      <div>
        <img src={KrispyKreme} alt="Krispy Kreme Logo" />
      </div>
      <div>
        <img src={PD} alt="P&D Auto Logo" />
      </div>
    </div>
  )
}

export default Partners
