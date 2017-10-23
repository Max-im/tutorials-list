import React, { Component } from 'react';
import './Links.css';
import Category from '../../containers/category/Category';
import Herro from '../../containers/herro/Herro';
import data from '../../assets/linksData';
import Single from '../single/Single';


const categories = [
  {
    name: 'GitHub',
    img: 'http://www.verovio.org/images/github.png',
    link: data
  },
  {
    name: 'Youtube',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Youtube_icon.svg/256px-Youtube_icon.svg.png',
    link: data
  },
  {
    name: 'other',
    img: 'https://camo.githubusercontent.com/1d32ceb9ce3f5ecb0d7da36861f9c8ce6e0ea8d3/68747470733a2f2f7261772e6769746875622e636f6d2f6361696f676f6e64696d2f6a732d7061747465726e732d7375626c696d652d736e6970706574732f6173736574732f6a732d7061747465726e732d6c6f676f2e706e67',
    link: data
  }
]


class Links extends Component {
  render() {
    let category;
    if(this.props.params.category){
      const tail = this.props.params.category;
      const obj = {}
      for(let i = 0; i < categories.length; i++){
        if(categories[i].name === tail){
          obj.name = categories[i].name;
          obj.link = categories[i].link;
          obj.img = categories[i].img;
        }
      }
      category = <Single category={obj}/>
    }
    else{
      category = (
        <div className="Links">
          <Herro 
            title="Links" 
            parag="This is usefull links for you learning" 
          />
          <div className="container">
            <Category data={categories} btnTxt="More" />
          </div>
        </div>
      )
    }

    return (
      category
    );
  }
}

export default Links;
