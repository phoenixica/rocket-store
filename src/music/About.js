import React from 'react'
// import { Link, Route } from 'react-router-dom';
// import Product from './Product';

export default class About extends React.Component {

render(){
    return(
        <div className="container">
        <div className="jumbotron">
            <h1 className="display-4">Rocket Store</h1>
            <p className="lead">This is an online store to sell music online 
            we sell both hard cover albums by famous musicians and online music. You can also upload and album 
            for us to promote</p>
            <hr className="my-4" />
            <p>This website is made with great passion by team rocket </p>
            <a className="btn btn-primary btn-lg  list-group-item-info" href="https://github.com/phoenixica/rocket-store" role="button">our github account</a>
        </div>
        </div>
        )
    }
}

