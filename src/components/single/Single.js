import React, { Component } from 'react';
import './Single.css';
import Header from '../../containers/header/Header';
import Footer from '../footer/Footer';




class Single extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Single">
          <div className="container">

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Single;
