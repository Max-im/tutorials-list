import React, { Component } from 'react';
import './Courses.css';
import Header from '../header/Header';
import Card from '../../containers/card/Card';
import Herro from '../../containers/herro/Herro';
import Footer from '../footer/Footer';
import data from '../../assets/coursesData';



class Courses extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Courses">
          <Herro 
            title="Courses" 
            parag="This is a group of the best courses and resourses for teaching code" 
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

export default Courses;
