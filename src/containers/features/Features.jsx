import React from 'react'
import './features.css'
import { Feature } from '../../Components'

// Import team member images from assets
import { DariusAlexander, CyrusAlexander, defaultpic } from '../../assets/imports';
import MikeGong from '../../assets/MikeGong.jpg'
// import GalaxySu from '../../assets/GalaxySu.jpg'
import EldrickChand from '../../assets/EldrickChand.jpg'

const featuresData = [
  {
    name: "Darius Alexander",
    img: DariusAlexander,
    position: "Co-founder, Ex-CEO",
  }, 
  {
    name: "Cyrus Alexander",
    img: CyrusAlexander,
    position: "Co-founder, Ex-CMO",
  },
  {
    name: "Mike Gong",
    img: MikeGong,
    position: "Co-founder, Ex-COO",
  },
  {
    name: "Galaxy Su",
    img: defaultpic,
    position: "Co-founder, Ex-CFO",
  },
  {
    name: "Eldrick Chand",
    img: EldrickChand,
    position: "Co-founder, Ex-CHRO",
  },
]

const Features = () => {
  return (
    <div className="byyourside_features section_padding" id="features">
      <div className="byyourside_features-heading">
        <h1 className="gradient_text">
          Our Founding Story
        </h1>
        <p>
          In late 2022, the tail end of the COVID-19 pandemic left many communities 
          left food bank visits at a record high in the Greater Vancouver Area. 
          Witnessing the struggles of those around them, a group of 5 passionate youth 
          of Windermere Secondary School united to form ByYourSide Society, a youth-led
          compassionate organization dedicated to uplifting the lives of the less fortunate
        </p>
      </div>      
      <div className="byyourside_features-container">
        {featuresData.map((item, index) => (
          <Feature name={item.name} img={item.img} position={item.position} key={item.name + index} />
        ))}
      </div>
    </div>
  )
}

export default Features



