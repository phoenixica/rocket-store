import React from 'react';
import './seller.css';
import firebase from "../firebaseConfig";
// import { Link, Route } from 'react-router-dom';
// import Product from './Product';

export default class Seller extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            album: '',
            artist:'',
            image:''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
      }
  
      handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.album + this.state.artist );
        event.preventDefault();
        var db = firebase.firestore();
        db.collection("danyah1").add({
            album:this.state.album,
            artist:this.state.artist,
            image:this.state.image
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        console.log(db)
        


      }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
          Album:
          <input type="text" name='album' value={this.state.album} onChange={this.handleChange} />
        </label><br />
        <label>
          Artist:
          <input type="text" name='artist' value={this.state.artist} onChange={this.handleChange} />
        </label><br />
        <label>
          Cover:
          <input type="text" name='image' value={this.state.file} onChange={this.handleChange} />
        </label><br /><br />
        <input type="submit" value="Submit" />
      </form>
        )
    }
}

