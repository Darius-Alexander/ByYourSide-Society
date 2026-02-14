import React from 'react'
import './byyourside.css'
import { Feature } from '../../Components'

import defaultpic from '../../assets/deafultpic.png'


const teamData = [
  {
    name: "Kazma Yoshimura",
    img: defaultpic,
    position: "CEO",
  },
  {
    name: "Operation Hunger",
    img: defaultpic,
    position: "COO",
  },
  {
    name: "Operation Hunger",
    img: defaultpic,
    position: "CFO",
  },
  {
    name: "Operation Hunger",
    img: defaultpic,
    position: "CMO",
  },
  {
    name: "Operation Hunger",
    img: defaultpic,
    position: "CHRO",
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
