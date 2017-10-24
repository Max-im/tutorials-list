import React from 'react';
import './SingleHerro.css';
import PropTypes from 'prop-types';


function SingleHerro(props){
  const title = props.title;
  const parag = props.parag;
  const img = props.img;

  return (
    <div className="SingleHerro">
     
     <div className="jumbotron jumbotron-fluid ">
      <div className="container singleHerro-jumbotrone">
        <h1 className="display-3">{ title }</h1>
        <p className="lead">{ parag }</p>
        <img className="singleHerro-img" src={ img } alt={ title } />
      </div>
    </div>
      
    </div>
  );
}

SingleHerro.propTypes = {
  title: PropTypes.string.isRequired,
  parag: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default SingleHerro;
