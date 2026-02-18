import React from 'react'
import './ourteam.css'
import { Feature } from '../../Components'

import { DariusAlexander, CyrusAlexander, defaultpic } from '../../assets/imports';
// import KentaYoshimura from '../../assets/KentaYoshimura.jpg'

const boardData = [
  {
    name: "Cyrus Alexander",
    img: CyrusAlexander,
    position: "Chair",
  },
  {
    name: "Kenta Yoshimura",
    img: defaultpic,
    position: "Vice-Chair",
  },  
  {
    name: "Darius Alexander",
    img: DariusAlexander,
    position: "Software Developer"
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

const OurTeam = () => {
  return (
    <div className="byyourside_ourteam gradient_bg section_margin" id="ourteam">
      <div className="byyourside_ourteam-heading">
        <h1 className="gradient_text">
          Our Team
        </h1>
      </div>
      <h2 className="byyourside_ourteam-subheading">
        Our Board
      </h2>
      <div className="byyourside_ourteam-container">
        {boardData.map((item, index) => (
          <Feature name={item.name} img={item.img} position={item.position} key={item.name + index} />
        ))}
      </div>
      <h2 className="byyourside_ourteam-subheading">
        Our Executives
      </h2>
      <div className="byyourside_ourteam-container">
        {teamData.map((item, index) => (
          <Feature name={item.name} img={item.img} position={item.position} key={item.name + index} />
        ))}
      </div>
    </div>
  )
}

export default OurTeam
