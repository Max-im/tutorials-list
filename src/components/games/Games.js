import React, { Component } from 'react';
import './Games.css';
import Card from '../../containers/card/Card';
import Herro from '../../containers/herro/Herro';
import data from '../../assets/gamesData';

let api;


class Games extends Component {
  
  componentWillMount() {
    api = data;
  }


  render() {
    return (
      <div className="Games">
        <Herro 
          title="Games" 
          parag="A few games for programmers. Learn while playing!" 
        />
        <div className="container">
          <Card data={ api } btnTxt="Go"/>
        </div>
      </div>
    );
  }
}

export default Games;
