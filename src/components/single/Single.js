import React, { Component } from 'react';
import './Single.css';
import SingleHerro from '../../containers/singleHerro/SingleHerro';




class Single extends Component {
  render() {
    const propObj = this.props.category;
    const data = propObj.link.sort( (a, b) => {
      if(a.name > b.name) return 1;
    });
    const listItems = data.map( ( item, index ) => 
       <li key={index} className="list-group-item">
        <b>{index+1}. </b>
        <a href={item.link} target="_blank"> {item.name} </a>
       </li>
    )


    return (
      <div className="Single">
        <SingleHerro 
          title={propObj.name} 
          parag="category" 
          img={propObj.img}
        />
        <div className="container single-container">
          <ul className="list-group">{listItems}</ul>
        </div>
      </div>
    );
  }
}

export default Single;
