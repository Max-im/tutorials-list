import React, { Component } from 'react';
import './Games.css';
import Header from '../header/Header';
import Card from '../../containers/card/Card';
import Herro from '../../containers/herro/Herro';
import data from '../../assets/gamesData';
import Footer from '../footer/Footer';




class Games extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Games">
          <Herro 
            title="Games" 
            parag="A few games for programmers. Learn by playing" 
          />
          <div className="container">
            <Card data={data} btnTxt="Go"/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Games;
