import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header'
import Courses from '../courses/Courses'
import Links from '../links/Links'


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <Courses />
        <Links />


      </div>
    );
  }
}

export default App;
