import React from 'react'
import './feature.css'

const Feature = ({ title, imgUrl }) => {
  return (
    <div className="byyourside_features-container_feature"> 
      <div className="byyourside_features-container_feature-title">
        <div />
        <h1> {title} </h1>
      </div>
      <div className="byyourside_features-container_feature-image">
        <img src={imgUrl} alt={title} />
      </div>
    </div>
  )
}

export default Feature



