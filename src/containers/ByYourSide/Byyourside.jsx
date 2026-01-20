import React from 'react'
import './byyourside.css'
import { Feature } from '../../Components'


const Byyourside = () => {
  return (
    <div className="byyourside_byyourside gradient_bg section_margin" id="byyourside">
      <div className= "byyourside_byyourside-heading">
        <h1 className = "gradient_text">
          Our Team
        </h1>
      </div>
      <div className="byyourside_byyourside-container">
        <Feature 
          img="https://via.placeholder.com/150"
          name="Operation Hunger" 
          position="Project Manager"
        />
        <Feature 
          img="https://via.placeholder.com/150"
          name="Operation Hunger" 
          position="Project Manager"
        />
        <Feature 
          img="https://via.placeholder.com/150"
          name="Operation Hunger" 
          position="Project Manager"
        />
        <Feature 
          img="https://via.placeholder.com/150"
          name="Operation Hunger" 
          position="Project Manager"
        />
        <Feature 
          img="https://via.placeholder.com/150"
          name="Operation Hunger" 
          position="Project Manager"
        />
      </div>
    </div>
  )
}

export default Byyourside
