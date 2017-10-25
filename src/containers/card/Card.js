import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

function Card(props) {
  
  const data = props.data.sort( (a, b) => {
    if(a.name > b.name) return 1;
  });

  const listItems = data.map((item, index) =>
    <li className="Cards" key={index}>
      <div className="card">
        <div className="card-img-wrap">
          <img className="card-img" src={item.img} alt="Card image cap" />
        </div>
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text"></p>
          <a href={item.link} target="_blank" className="btn btn-primary">{props.btnTxt}</a>
        </div>
      </div>
    </li>
  );


  return (
    <ul className="cardWrapper">{listItems} </ul>
  );
}

Card.propTypes = {
  data: PropTypes.array.isRequired,
}



export default Card;


