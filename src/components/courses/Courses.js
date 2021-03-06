import React, { Component } from 'react';
import './Courses.css';
import Card from '../../containers/card/Card';
import Herro from '../../containers/herro/Herro';
import data from '../../assets/coursesData';

let api;

class Courses extends Component {
  
  componentWillMount() {
    api = data;
  }

  render() {
    return (
      <div>
        <div className="Courses">
          <Herro 
            title="Courses" 
            parag="This is a group of the best courses and resourses for teaching code" 
          />
          <div className="container">
            <Card data={api} btnTxt="Go"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;
