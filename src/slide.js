import React from 'react';
import { Slide } from 'react-slideshow-image';

import { Link, Route } from 'react-router-dom';
import  img1 from './images/img1.png';
import  img2  from './images/img2.png'
import  img4 from './images/img4.png'



import './SlideShow.css';

const slideImages = [
    './images/img22.jpg',
    './images/img1.png',
    './images/img20.png'
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

const Slideshow = () => {
    return (
        <Slide {...properties}>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${img1})` }}>
                    {/* <img src='images/img22.jpg' alt="#"/> */}
                    <span><Link to='/albums'>album</Link> </span>
                </div>
            </div>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${img2})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${img4})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
    )
}
export default Slideshow;