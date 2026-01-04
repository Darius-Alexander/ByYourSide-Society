import React from 'react'
import './features.css'
import { Feature } from '../../Components'

const featuresData = [
  {
    title: "Darius Alexander - Co-Founder, Ex- CEO",
    text: "Brief Description"
  }, 
  {
    title: "Cyrus Alexander - Co-Founder, Ex- CMO",
    text: "Brief Description"
  },
  {
    title: "Mike Gong - Co-Founder, Ex- COO",
    text: "Brief Description"
  },
  {
    title: "Galaxy Su - Co-Founder, Ex- CFO",
    text: "Brief Description"
  },
    {
    title: "Eldrick Chand - Co-Founder, Ex- CHRO",
    text: "Brief Description"
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









