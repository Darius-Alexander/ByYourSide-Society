import React from 'react'
import './blog.css'
import { Article } from '../../Components';
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
          <Article imgUrl = { blog01 } date="Sep 26, 2021" title="Event: Car Wash Fundraiser"/>
        </div>
        <div className="byyourside_blog-container_groupB">
          <Article imgUrl = { blog02 } date="Sep 26, 2021" title="Event: Car Wash Fundraiser"/>
          <Article imgUrl = { blog03 } date="Sep 26, 2021" title="Event: Car Wash Fundraiser"/>
          <Article imgUrl = { blog04 } date="Sep 26, 2021" title="Event: Car Wash Fundraiser"/>
          <Article imgUrl = { blog05 } date="Sep 26, 2021" title="Event: Car Wash Fundraiser"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
