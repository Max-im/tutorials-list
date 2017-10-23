import React from 'react';
import './SingleHerro.css';

function SingleHerro(props){
  return (
    <div className="SingleHerro">
     
     <div className="jumbotron jumbotron-fluid ">
      <div className="container singleHerro-jumbotrone">
        <h1 className="display-3">{props.title}</h1>
        <p className="lead">{props.parag}</p>
        <img className="singleHerro-img" src={props.img} alt={props.title} />
      </div>
    </div>
      
    </div>
  );
}

export default SingleHerro;
