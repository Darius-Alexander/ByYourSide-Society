import React from 'react'
import './byyourside.css'
import { Feature } from '../../Components'


const Byyourside = () => {
  return (
    <div className="byyourside_byyourside section_margin" id="byyourside">
      <div className="byyourside_byyourside-feature">
          <Feature />
      </div>
      <div className= "byyourside_byyourside-heading">
        <h1 className = "gradient_text">
          Empowering Youth, Transforming Communities
        </h1>
        <p>
          Discover the impact of ByYourSide Society's youth-led initiatives in uplifting Vancouver's less fortunate. Join us in fostering hope, support, and positive change for a brighter tomorrow.
        </p>
      </div>
      <div className="byyourside_byyourside-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default Byyourside
