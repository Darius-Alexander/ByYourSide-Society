import React from 'react'
import './feature.css'

const Feature = ({ name, img, position }) => {
  return (
    <div className="byyourside_features-container_feature"> 
      <div className="byyourside_features-container_feature-image">
        <img src={img} alt={name} />
      </div>
      <div className="byyourside_features-container_feature-title">
        <div />
        <h1> {name} </h1>
        <h2> {position} </h2>
      </div>
    </div>
  )
}

export default Feature



