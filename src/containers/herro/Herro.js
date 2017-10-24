import React from 'react';
import './Herro.css';
import PropTypes from 'prop-types';


function Herro(props){
  const title = props.title
  const parag = props.parag

  return (
    <div className="Herro">
     
     <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">{title}</h1>
        <p className="lead">{parag}</p>
      </div>
    </div>
      
    </div>
  );
}

Herro.propTypes = {
  title: PropTypes.string.isRequired,
  parag: PropTypes.string.isRequired
}

export default Herro;
