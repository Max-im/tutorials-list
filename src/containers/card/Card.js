import React from 'react';
import './Card.css';

function Card() {
  return (
    <div className="Card">
     
      <div className="card">
        <img 
          className="card-img-top" 
          src="http://images5.fanpop.com/image/photos/27900000/-3-life-photography-27963069-500-333.jpg"
          alt="Card image cap" />
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary ">Go for</a>
        </div>
      </div>
    
    </div>
  );
}

export default Card;
