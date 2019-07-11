import React from 'react';
// import { Slide } from 'react-slideshow-image';

// import { Link, Route } from 'react-router-dom';
import img1 from './images/pawel-bukowski-QAZsV6GZo7g-unsplash.jpg';
import img2 from './images/phillip-blocker-b9CcBwmq30c-unsplash.jpg';
import img3 from './images/puk-khantho-sWbGwr1fOUk-unsplash.jpg';
import img4 from './images/sergio-ruiz-WetGvQxnbYY-unsplash.jpg';
import img5 from './images/austin-neill-SLUeuL-mrRg-unsplash.jpg';
import img6 from './images/surya-urs-8YZe_V0Bn_o-unsplash.jpg';
import img7 from './images/a-l-ya631mqQ7Ng-unsplash.jpg';
// import img33 from './images/img33.jpg';
// import img6 from './images/img6.jpg';



import './Slide.css'

const Slideshow = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img4} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img5} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img6} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img7} className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    )
}

export default Slideshow;