import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-menu">
          <Link to="/" className="logo-link">
            <span className="logo-text">AI Knowledge Hub</span>
          </Link>
        </div>
        <nav className="navigation">
          <Link to="/" className="nav-link active">Dashboard</Link>
          <a href="#" className="nav-link">Preferences</a>
        </nav>
      </div>
      <div className="header-right">
        <div className="user-profile">
          {/* Placeholder for user profile image */}
          <div className="user-icon"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
