import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header';
import Courses from '../courses/Courses';
import Links from '../links/Links';
import Games from '../games/Games';
import Footer from '../footer/Footer';




class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        
        <main className="main">
          <Courses />
          <Links />
          <Games />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
