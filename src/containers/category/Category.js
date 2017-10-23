import React from 'react';
import { Link } from 'react-router';
import './Category.css';

function Category(props) {
  
  const data = props.data.sort( (a, b) => {
    if(a.name > b.name) return 1;
  });
  const listItems = data.map((item, index) =>
    <li className="Card" key={index}>
      <div className="card">
        <div className="card-img-wrap">
          <img className="card-img" src={item.img} alt="Card image cap" />
        </div>
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text"></p>
          <Link to={'links/'+item.name} className="btn btn-primary">{props.btnTxt}</Link>
        </div>
      </div>
    </li>
  );

  return (
    <ul className="cardWrapper">{listItems} </ul>
  );
}

export default Category;


