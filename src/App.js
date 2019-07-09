import React,{ Component } from 'react';
import Header from './music/Header';


const slideImages = [
    'images/img1.png',
    'images/img2.png.jpg',
    'images/img5.png.jpg'
];

const properties = {
    duration: 1000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

export default class App extends Component 
{
  render()
  {
    return (
      <div>
        <Header />
      </div>
    );
  }
}





