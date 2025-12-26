// Root component of the React application
// Top level component for entire website

// Defines a functional component named App using RAFCE

import React from 'react';
import { Footer, Blog, Header, Possibility, Features, Byyourside } from './containers';
import { CTA, Brand, Navbar } from './Components';
import './app.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Byyourside />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
