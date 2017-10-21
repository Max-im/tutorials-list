import React, { Component } from 'react';
import './Links.css';
import Card from '../../containers/card/Card'
import Herro from '../../containers/herro/Herro'

class Links extends Component {
  render() {
    return (
      <div className="Links">
        <Herro 
          title="Links" 
          parag="This is usefull links for you learning" 
        />
        <div className="container">
          <Card />
        </div>

        
      </div>
    );
  }
}

export default Links;
