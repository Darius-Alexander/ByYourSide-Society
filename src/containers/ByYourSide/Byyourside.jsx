import React from 'react'
import './byyourside.css'
import { Feature } from '../../Components'

import { DariusAlexander, CyrusAlexander, defaultpic } from '../../assets/imports';

const boardData = [
  {
    name: "Cyrus Alexander",
    img: defaultpic,
    position: "Chair",
  },
  {
    name: "Kenta Yoshimura",
    img: defaultpic,
    position: "Vice-Chair",
  },  {
    name: "Darius Alexander",
    img: DariusAlexander,
    position: "Software Engineer"
  }
]

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
        <h2 className = "byyourside_byyourside_heading">
          Our Board
        </h2>
      </div> 
      <div className="byyourside_byyourside-container">
        {boardData.map((item, index) => (
          <Feature name={item.name} img={item.name} position={item.position} key={item.name + index} />
        ))}
      </div>
      <h2 className = "byyourside_byyourside_heading">
        Our Executives
      </h2>
      <div className="byyourside_byyourside-container">
        {teamData.map((item, index) => (
          <Feature name={item.name} img={item.img} position={item.position} key={item.name + index} />
        ))}
      </div>
    </div>
  )
}

export default Byyourside
