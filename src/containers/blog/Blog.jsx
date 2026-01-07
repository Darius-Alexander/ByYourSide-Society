import React from 'react'
import './blog.css'
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className="byyourside_blog section_padding" id="blog">
      <div className="byyourside_blog-heading">
        <h1 className="gradient_text"> 
          Photos from some of our favourite events!
        </h1>
      </div>
      <div className="byyourside_blog-container">
        <div className="byyourside_blog-container_groupA">
          <Article imgUrl = { blog01 } />
        </div>
        <div className="byyourside_blog-container_groupB">
          <Article imgUrl = { blog02 } />
          <Article imgUrl = { blog03 } />
          <Article imgUrl = { blog04 } />
          <Article imgUrl = { blog05 } />
        </div>
      </div>
    </div>
  )
}

export default Blog
