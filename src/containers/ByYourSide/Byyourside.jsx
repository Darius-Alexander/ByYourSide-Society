import React from 'react'
import './byyourside.css'
import { Feature } from '../../Components'


const Byyourside = () => {
  return (
    <div className="byyourside_byyourside section_margin" id="byyourside">
      <div className="byyourside_byyourside-feature">
          <Feature 
            title="Our initiatives" 
            text="ByYourSide Society runs several iniatives aimed towards uplifting the lives of the less
                  fortunate around the Greater Vancouver Area highlighted by Operation Hunger and Project Warmth."
          />
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
        <Feature 
          title="Operation Hunger" 
          text="Operation Hunger is an initiative focused on providing meals to those in need. Through 
                fundraisers such as Donut Sales and Car Washes, BYSS commits to a monthly donation of 
                $100 to the greater Vancoouver Food Bank"
        />
        <Feature 
          title="Project Warmth" 
          text="Project Warmth is an initiative aimed at providing the needy with warm, adequate clothing. 
                Each year BYSS donates hundreds of gently used clothing to the Big Brothers of Vancouver
                through hosting large scale clothing drives"
        />
      </div>
    </div>
  )
}

export default Byyourside
