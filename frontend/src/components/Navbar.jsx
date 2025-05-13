import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navStyle = {
    padding: '1rem',
    backgroundColor: '#1e40af',
    color: 'white',
    display: 'flex',
    gap: '1rem'
  };

  const linkStyle = (active) => ({
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    backgroundColor: active ? '#2563eb' : 'transparent'
  });

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle(isActive('/'))}>
        Dashboard
      </Link>
      <Link to="/cbm" style={linkStyle(isActive('/cbm'))}>
        CBM Calculator
      </Link>
      <Link to="/trips" style={linkStyle(isActive('/trips'))}>
        Trip Assignment
      </Link>
      <Link to="/drivers" style={linkStyle(isActive('/drivers'))}>
        Drivers
      </Link>
      <Link to="/retailers" style={linkStyle(isActive('/retailers'))}>
        Retailers
      </Link>
    </nav>
  );
};

export default Navbar;
