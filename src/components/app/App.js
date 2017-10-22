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
        <main className="main">
          <Courses />
          <Links />
        </main>

      </div>
    );
  }
}

export default App;
