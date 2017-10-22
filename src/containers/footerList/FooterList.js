import React from 'react';
import './FooterList.css';

function FooterList(props){
  const data=props.data;
  const itemList = data.map( (item, index) => 
    <li className="footer-list-item" key={index}>
      <a className="nav-link" href={item.link}>{item.name}</a>
    </li>
  );

  return (
    <div className="footer-block">
    <h3 className="footer-title">{props.title}</h3>
    <ul className="footer-nav">
      {itemList}
    </ul>
    </div>
  );
}

export default FooterList;
