// Root component of the React application
// Top level component for entire website

import React from 'react';

// React Router imports for page navigation
// BrowserRouter: Wraps the app to enable routing
// Routes: Container that holds all Route definitions
// Route: Defines a URL path and which component to show
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import page components (these are what Routes will switch between)
import { Home, Donation } from './containers';

// Navbar stays here because it appears on every page
import { Navbar } from './Components';

import './app.css';

const App = () => {
  return (    
    <BrowserRouter>
      <div className="App">
        {/* Navbar is OUTSIDE Routes so it shows on every page */}
        <Navbar />
        <Routes>
          {/* When URL is "/", show the Home component */}
          <Route path="/" element={<Home />} />
          {/* When URL is "/donate", show the Donation component */}
          <Route path="/donate" element={<Donation />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
