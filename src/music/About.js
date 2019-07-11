import React from 'react'
// import { Link, Route } from 'react-router-dom';
// import Product from './Product';
import './header.css';
// import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import Socials from './Socials';
// import ReactDOM from 'react-dom';
// import { SocialIcon } from 'react-social-icons';
// ReactDOM.render(<SocialIcon url="http://twitter.com/jaketrent" />, document.body);

export default class About extends React.Component {

render(){
    return(
        <div className="container">
        <div className="jumbotron">
            <h1 className="display-4 fonts text-danger">Rocart</h1>
            <p className="lead">
                This is an online store to sell music online 
            we sell both hard cover albums by famous musicians and online music. You can also upload and album 
            for us to promote</p>
            <p className="lead">
                 So we have chosen the name Rocart and it stands for (Rocket Cart), we are planning to develop this cart to its next versions, to be later on a good simple sopen source online store/cart..
                 if you are a developper and interested contact us on our github</p>
            <hr className="my-4" />
            <p>This website is made with great passion by team rocket </p>
            <a className="btn btn-info btn-lg " href="https://github.com/phoenixica/rocket-store" role="button">our github account</a>
            <Socials/>

        </div>

        </div>
      
        )
    }
}

