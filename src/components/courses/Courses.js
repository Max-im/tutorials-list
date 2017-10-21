import React, { Component } from 'react';
import './Courses.css';
import Card from '../../containers/card/Card'
import Herro from '../../containers/herro/Herro'

class Courses extends Component {
  render() {
    return (
      <div className="Courses">
        <Herro 
          title="Courses" 
          parag="This is a group of the best courses and resourses for teaching code" 
        />
        <div className="container">
          <Card />
        </div>

        
      </div>
    );
  }
}

export default Courses;
