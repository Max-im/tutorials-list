import React, { Component } from 'react';
import './Games.css';
import Card from '../../containers/card/Card';
import Herro from '../../containers/herro/Herro';
import data from '../../assets/gamesData';




class Games extends Component {
  render() {
    return (
      <div className="Games">
        <Herro 
          title="Games" 
          parag="A few games for programmers. Learn while playing!" 
        />
        <div className="container">
          <Card data={data} btnTxt="Go"/>
        </div>
      </div>
    );
  }
}

export default Games;
