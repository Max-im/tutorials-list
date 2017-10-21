import React from 'react';
import './Herro.css';

function Herro(props){
  return (
    <div className="Herro">
     
     <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">{props.title}</h1>
        <p className="lead">{props.parag}</p>
      </div>
    </div>
      
    </div>
  );
}

export default Herro;
