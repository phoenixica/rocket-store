// import React from 'react'
import firebase from '../firebaseConfig'
import React, { Component } from "react";
// import { MDBNotification } from "mdbreact";
// import Notif from './Notif';
import './header.css';

export default class List extends Component {

    state = ({
        //addAlbum: '',
        allAlbums: [],
        //user: ''
    });

    isAdded = () => {
      
        alert('"'+this.props.name +'" is added to your album list');
   
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
                this.props.button ? '' : <button className="badge badge-info " ref="btn" onClick={this.handleSubmit}>Add to cart</button>
              }
              </span>
              <h6 className="cartfonts">{this.props.name} </h6>
              <p className="albumtitle">{this.props.artist}</p>
              <img src={this.props.image} alt="" className="card-img-to "/>
            </div>
        </div>
       <br/>
    </div>
    )
  }
}

