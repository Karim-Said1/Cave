import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Dashboard from "./pages/Dashboard";
import DriversLocations from "./pages/DriversLocations";
import RetailersLocations from "./pages/RetailersLocations";
import CBMCalculator from "./pages/CBMCalculator";
import TripAssignment from "./pages/TripAssignment";
import SupplierTripAssignment from "./pages/SupplierTripAssignment";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/drivers" element={<DriversLocations />} />
        <Route path="/RetailersLocations" element={<RetailersLocations />} />
        <Route path="/cbm" element={<CBMCalculator />} />
        <Route path="/trips" element={<TripAssignment />} />
        <Route path="/SupplierTripAssignment" element={<SupplierTripAssignment />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
