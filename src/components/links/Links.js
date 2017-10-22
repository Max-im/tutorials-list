import React, { Component } from 'react';
import './Links.css';
import Header from '../header/Header';
import Card from '../../containers/card/Card';
import Herro from '../../containers/herro/Herro';
import Footer from '../footer/Footer';
import data from '../../assets/linksData';


class Links extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Links">
          <Herro 
            title="Links" 
            parag="This is usefull links for you learning" 
          />
          <div className="container">
            <Card data={data} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Links;
