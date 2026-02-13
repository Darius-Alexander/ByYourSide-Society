import React from 'react'
import './blog.css'
import { Article } from '../../Components';
import { blog01, blog02, blog03, blog04, blog05, blog06 } from './imports';

const Blog = () => {
  return (
    <div className="byyourside_blog section_padding" id="blog">
      <div className="byyourside_blog-heading">
        <h1 className="gradient_text"> 
          Photos from some of our favourite events!
        </h1>
      </div>
      <div className="byyourside_blog-container">
        <Article imgUrl={blog06} date="Dec 30, 2026" title="Operation Hunger: KrispyKreme Fundraiser - Burnaby, BC"/>
        <Article imgUrl={blog03} date="Dec 30, 2026" title="Operation Hunger: KrispyKreme Fundraiser - Richmond, BC"/>
        <Article imgUrl={blog04} date="Feb 23, 2024" title="Project Warmth: Big Brothers Clothing Drive - Vancouver, BC"/>
        <Article imgUrl={blog05} date="Jan 15, 2022" title="Operation Hunger: KrispyKreme Fundraiser - Burnaby, BC"/>
        <Article imgUrl={blog02} date="Nov 26, 2023" title="Operation Hunger: KrispyKreme Fundraiser - Vancouver, BC"/>
        <Article imgUrl={blog01} date="Oct 1, 2023" title="Operation Hunger: P&D Car Wash Fundraiser - Vancouver, BC"/>
      </div>
    </div>
  )
}

export default Blog
