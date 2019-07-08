import React from 'react'
<<<<<<< HEAD
import firebase from '../firebaseConfig'
=======
import { Link, Route } from 'react-router-dom';
import Product from './Product';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink
} from 'reactstrap';
import { Slide } from 'react-slideshow-image';


>>>>>>> commit

export default class List extends React.Component {

    state = ({
        //addAlbum: '',
        allAlbums: [],
        //user: ''
    });

    isAdded = () => {
        alert('"'+this.props.name +'" is added to your cart');
    };

    handleSubmit = (event) => {
      if (this.props.user)
      {

          event.preventDefault();
          // console.log(this.props.artist);
          const arr = firebase.database().ref('TeamRocketDB');
          const item = {
              title: this.props.name,
              image: this.props.image,
              artist: this.props.artist,
              user: this.props.user
          };

          arr.push(item);

          this.setState({
              addAlbum: ''
              //user: '',
          });

          this.refs.btn.setAttribute('disabled' , 'disabled');
          setTimeout(this.isAdded , 345);


      }

      else {
          alert('Login to add to cart')
      }

      };
  render(){

    return(
      
      <div className="col-lg-3">
        <div className="card">
          <div className="card-body">
            <span>
              {
                this.props.button ? '' : <button className="badge badge-secondary" ref="btn" onClick={this.handleSubmit}>Add to cart</button>
              }
              </span>
              <h6>{this.props.name} </h6>
              <p>{this.props.artist}</p>
              <img src={this.props.image} alt="" className="card-img-top"/>
            </div>
        </div>
       <br/>
    </div>
    )
  }
}

