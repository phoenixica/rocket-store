import React from 'react'
import Slideshow from '../slide';


// import { Link, Route } from 'react-router-dom';
// import Product from './Product';
// import { Button } from 'react-bootstrap';
export default class Home extends React.Component {

render(){
    return(
        <div className="container">
         <h2>Home</h2>
         <Slideshow />
        </div>


       
        )
    }
}

