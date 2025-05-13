import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Dashboard from "./pages/Dashboard";
import CBMCalculator from "./pages/CBMCalculator";
import TripAssignment from "./pages/TripAssignment";
import RetailersLocations from "./pages/RetailersLocations";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cbm" element={<CBMCalculator />} />
        <Route path="/trips" element={<TripAssignment />} />
        <Route path="/RetailersLocations" element={<RetailersLocations />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
