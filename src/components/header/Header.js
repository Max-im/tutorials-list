import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         
          <div className="container">
            
            <a className="navbar-brand" href="#">Tutorials</a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to = "/" className="nav-link">Courses</Link>
                </li>
                <li className="nav-item">
                  <Link to="/links" className="nav-link">Links</Link>
                </li>
                <li className="nav-item">
                  <Link to="/games" className="nav-link">Games</Link>
                </li>
              </ul>
            </div>
         
          </div>
        </nav>
        
      </header>
    );
  }
}

export default Header;
