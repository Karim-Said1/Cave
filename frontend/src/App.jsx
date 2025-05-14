import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import DriversLocations from './pages/DriversLocations';
import RetailersLocations from './pages/RetailersLocations';
import CBMCalculator from './pages/CBMCalculator';
import TripAssignment from './pages/TripAssignment';
import SupplierTripAssignment from './pages/SupplierTripAssignment';

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav style={{ display: "flex", gap: 24, padding: 24, background: "#f8fafc" }}>
        <Link to="/" style={{ fontWeight: 600, color: "#2563eb", textDecoration: "none" }}>Trip Assignment</Link>
        <Link to="/supplier-trip-assignment" style={{ fontWeight: 600, color: "#be123c", textDecoration: "none" }}>Supplier Trip Assignment</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/drivers" element={<DriversLocations />} />
        <Route path="/RetailersLocations" element={<RetailersLocations />} />
        <Route path="/cbm" element={<CBMCalculator />} />
        <Route path="/trips" element={<TripAssignment />} />
        <Route path="/supplier-trip-assignment" element={<SupplierTripAssignment />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
