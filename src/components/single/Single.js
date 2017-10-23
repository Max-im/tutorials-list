import React, { Component } from 'react';
import './Single.css';
import Herro from '../../containers/herro/Herro';




class Single extends Component {
  render() {
    const propObj = this.props.category;


    return (
      <div className="Single">
        <Herro 
          title={propObj.name} 
          parag="category" 
        />
        <div className="container single-container">
          <img className="single-img" src={propObj.img} alt={propObj.name} /> 
          <p>{propObj.name}</p>
        </div>
      </div>
    );
  }
}

export default Single;
