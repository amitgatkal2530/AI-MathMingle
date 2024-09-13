import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure you're importing BrowserRouter
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import img8 from './image/img8.jpg'; // Corrected import path

function App() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img8})` }}> {/* Use imported image */}
      <Navbar />
      <Router>  {/* Wrap your app in Router */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/canvas-input" element={<CanvasInput />} />
          <Route path="/solution-display" element={<SolutionDisplay />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;