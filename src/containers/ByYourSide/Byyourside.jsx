import React from 'react'
import './byyourside.css'
import { Feature } from '../../Components'

const teamData = [
  {
    name: "Operation Hunger",
    img: "https://via.placeholder.com/150",
    position: "Project Manager",
  },
  {
    name: "Operation Hunger",
    img: "https://via.placeholder.com/150",
    position: "Project Manager",
  },
  {
    name: "Operation Hunger",
    img: "https://via.placeholder.com/150",
    position: "Project Manager",
  },
  {
    name: "Operation Hunger",
    img: "https://via.placeholder.com/150",
    position: "Project Manager",
  },
  {
    name: "Operation Hunger",
    img: "https://via.placeholder.com/150",
    position: "Project Manager",
  },
]

const Byyourside = () => {
  return (
    <div className="byyourside_byyourside gradient_bg section_margin" id="byyourside">
      <div className= "byyourside_byyourside-heading">
        <h1 className = "gradient_text">
          Our Team
        </h1>
      </div>
      <div className="byyourside_byyourside-container">
        {teamData.map((item, index) => (
          <Feature name={item.name} img={item.img} position={item.position} key={item.name + index} />
        ))}
      </div>
    </div>
  )
}

export default Byyourside
