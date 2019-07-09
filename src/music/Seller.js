import React from 'react';
import './seller.css';
import firebase from "../firebaseConfig";
import List from './List';

const db = firebase.firestore().collection("danyah1");

export default class Seller extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            album: '',
            artist:'',
            image:'',
            display:[],
            clicked:true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showClick = this.showClick.bind(this);
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
        this.setState({
          album: '',
          artist:'',
          image:'',
        })
      }

      showClick(event){
        let arr=[]
        event.preventDefault();
        db.get().then((querySnapshot) => {
          querySnapshot.forEach(doc =>  {
              arr.push(doc.data())
              this.setState({
              display:arr,
              clicked:false
              })
            }

          )
          console.log("state:")
          console.log(this.state.display)
        })
      }

    render() {
      
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-auto">
            <input placeholder="Album" 
            type="text" 
            name='album' 
            value={this.state.album} 
            onChange={this.handleChange}
            className="form-control mb-2"
            />
            </div>
            <div className="col-auto">
            <input 
            placeholder="Artist" 
            type="text" name='artist' 
            value={this.state.artist} 
            onChange={this.handleChange}
            className="form-control mb-2"
            />
            </div>
            <div className="col-auto">
            <input 
            placeholder="Cover Url" 
            type="text" name='image' 
            value={this.state.image} 
            onChange={this.handleChange}
            className="form-control mb-2"
            /></div>
            <input 
            type="submit" 
            value="Submit" 
            className="btn btn-secondary mb-2" />
          </div>
        </form>
      
      <br /><br />
      <div className="row">
      <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={this.showClick}>User Albums</button>
      </div>
      <br /><br />
      <div className="container">
          <div className="row">
          {
              this.state.clicked ? "" : this.state.display.map((album,index) =>
                <List 
                  key={index}
                  id={index}
                  name={album.album}
                  artist={album.artist}
                  image={album.image}
                  button={true}
                />
              )
          }
          </div>
        </div>
      </div>
      )
    }
}