import React, { Component } from 'react';
import './Header.css';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

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
                <li className="nav-item active">
                  <a className="nav-link" Link to = "/courses">Courses <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" Link to = "/links">Links</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" Link to = "/games">Games</a>
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
