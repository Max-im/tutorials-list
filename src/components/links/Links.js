import React, { Component } from 'react';
import './Links.css';
import Category from '../../containers/category/Category';
import Herro from '../../containers/herro/Herro';
import Single from '../single/Single';
import NotFound from '../../containers/notFoutd/NotFound';
import ghData from '../../assets/linksGitData';
import otherData from '../../assets/linksOtherData';
import YTData from '../../assets/linksYTData';

const api = [
  ghData, YTData, otherData
];


const categories = [
  {
    name: 'GitHub',
    img: 'http://www.verovio.org/images/github.png',
    link: ''
  },
  {
    name: 'Youtube',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Youtube_icon.svg/256px-Youtube_icon.svg.png',
    link: ''
  },
  {
    name: 'other',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAJFBMVEWcws6LqrX///+WucWNrbmwztjr8/Xn7vCiu8OZvsqPsLukvscykzm/AAABxElEQVR4nO3R0UoDQRBE0awbNer//69GjGxmI3S6bg2iVc/NzIF7OGRZlmVZlmVZlmVZlmVZlv3nPQ57ad5gexr2uvZusD0MW4773yo3PtCy7H6r3DhBu98qN1bQWKRyYwWNv1VuvKChSOXGDbr6rXJjB22LVG7soO1vlRs/aFOkcjMD9P1b5WYK6FKkcjMFdPmtcjMH9FWkcjML9Plb5WYa6FykcjMNdP6tcjMP9FGkcjMTtFRuMBEFwqpRIEyEgahqIIgRkSCkGglCRONnlf0IIqrBIF1Eg+RqNEgW4SC1mgGkiRwgqZoDJIksIKWaCdQXuUDtai5QW1T5rAXqVjOCeiInqFXNCWqJrKBONTNoCSiggAIKKKCAAgoooL8Oeh5269HKDQZ6O13v1qOnwg0GWu95vbG7QYf1+MtAZlED5K3WAVlFLZCzWg9kFDVBvmpdkE3UBrmq9UEmkQDyVFNAFpEEclTTQAaRCOKrqSBcJIPoajoIFgEgthoBQkUIiKzGgEARBOKqUSBMhIGoahwIEoEgphoJQkQoiKjGggARDNKr0SBZhIPUajxIFBlAWjUHSBJZQEo1D0gQmUD9ai5QW/QOnHgtdmAYj+MAAAAASUVORK5CYII=',
    link: ''
  }
]


class Links extends Component {
  
  componentWillMount() {
    for(let i = 0 ; i < categories.length ; i++ ){
      categories[i].link = api[i];
    }
  }


  render() {
    let category;
    if(this.props.params.category){
      const tail = this.props.params.category;
      let index;
      for(let i = 0; i < categories.length; i++){
        if(categories[i].name === tail){
          index = i;
        }
      }
      if(categories[index]){
        category = <Single category={categories[index]} />
      }
      else{
        category = <NotFound />
      }
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
