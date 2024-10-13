import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
          <div className="logo-icon"></div>
          <span className="logo-text">Drive lah</span>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">Learn more</a>
          <a href="#" className="nav-link">List your car</a>
          <a href="#" className="nav-link">Inbox</a>
          <div className="user-icon"></div>
        </nav>
      </header>
  )
}

export default Header