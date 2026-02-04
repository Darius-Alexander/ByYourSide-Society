// Root component of the React application
// Top level component for entire website

// Defines a functional component named App using RAFCE

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Donation } from './containers';
import { Navbar } from './Components';
import './app.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="gradient_bg">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donation />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
