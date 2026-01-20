import React from 'react'
import './features.css'
import { Feature } from '../../Components'

const featuresData = [
  {
    name: "Darius Alexander - Co-Founder, Ex- CEO",
    img: "https://via.placeholder.com/150",
    position: "Chief Executive Officer",
  }, 
  {
    name: "Cyrus Alexander - Co-Founder, Ex- CMO",
    img: "https://via.placeholder.com/150",
    position: "Chief Marketing Officer",
  },
  {
    name: "Mike Gong - Co-Founder, Ex- COO",
    img: "https://via.placeholder.com/150",
    position: "Chief Operating Officer",
  },
  {
    name: "Galaxy Su - Co-Founder, Ex- CFO",
    img: "https://via.placeholder.com/150",
    position: "Chief Financial Officer",
  },
  {
    name: "Eldrick Chand - Co-Founder, Ex- CHRO",
    img: "https://via.placeholder.com/150",
    position: "Chief Human Resources Officer",
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
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features









