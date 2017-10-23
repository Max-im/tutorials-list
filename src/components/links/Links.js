import React, { Component } from 'react';
import './Links.css';
import Card from '../../containers/card/Card';
import Herro from '../../containers/herro/Herro';
import data from '../../assets/linksData';


const categories = [
  {
    name: 'GitHub',
    img: '',
    link: ''
  },
  {
    name: 'Youtube',
    img: '',
    link: ''
  },
  {
    name: 'Other',
    img: '',
    link: ''
  }
]


class Links extends Component {
  render() {
    return (
      <div className="Links">
        <Herro 
          title="Links" 
          parag="This is usefull links for you learning" 
        />
        <div className="container">
          <Card data={categories} btnTxt="More" />
        </div>
      </div>
    );
  }
}

export default Links;
