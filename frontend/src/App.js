import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Donation } from './containers';
import { Navbar } from './Components';
import './app.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donation />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
