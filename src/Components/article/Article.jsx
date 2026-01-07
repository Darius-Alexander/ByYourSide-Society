import React from 'react'
import './article.css'

const Article = ({ imgUrl }) => {
  return (
    <div className="byyourside_blog-container_article">
      <div className="byyourside_blog-container_article-image">
        <img src={imgUrl} alt="blog image" />
      </div>
    </div>
  )
}

export default Article
