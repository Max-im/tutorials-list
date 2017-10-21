import React from 'react';
import './Card.css';

function Card(props) {
  
  const data = props.data;
  const listItems = data.map((item, index) =>
    <li className="Card" key={index}>
      <div className="card ">
        <img className="card-img-top" src="http://images5.fanpop.com/image/photos/27900000/-3-life-photography-27963069-500-333.jpg" alt="Card image cap" />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">{item.val}</p>
          <a href="#" className="btn btn-primary">Go to course</a>
        </div>
      </div>
    </li>
  );

  return (
    <ul className="cardWrapper">{listItems}</ul>
  );
}

export default Card;


