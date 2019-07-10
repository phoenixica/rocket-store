// import React from 'react'
import firebase from '../firebaseConfig'
import React, { Component } from "react";
// import { MDBNotification } from "mdbreact";
// import Notif from './Notif';

export default class List extends Component {

    state = ({
        //addAlbum: '',
        allAlbums: [],
        user: ''
    });

    isAdded = () => {
      
        alert('"'+this.props.name +'" is added to your album list');
   
    };

    handleSubmit = (event) => {

            event.preventDefault();
               // console.log(this.props.artist);
                const arr = firebase.database().ref('TeamRocketDB');
                const item = {
                    title: this.props.name,
                    image: this.props.image,
                    artist: this.props.artist
                };

                arr.push(item);

                this.setState({
                    addAlbum: '',
                    user: '',
                });

                this.refs.btn.setAttribute('disabled' , 'disabled');
                setTimeout(this.isAdded , 345);


    };

  render(){

    return(

        <li>
          <div>
              <h4>{this.props.name}</h4>
              <p>{this.props.artist}</p>
              <img src={this.props.image} alt=""/>
              <button ref="btn" onClick={this.handleSubmit}>Add to cart</button>
          </div>
        </li>
  
    )
  }
}

