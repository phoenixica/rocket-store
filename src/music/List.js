// import React from 'react'
import firebase from '../firebaseConfig'
import React, { Component } from "react";
// import { MDBNotification } from "mdbreact";
// import Notif from './Notif';
import './List.css'
// import swal from 'sweetalert/with-react';
import SweetAlert from 'sweetalert2-react';



export default class List extends Component {

    state = ({
        show:false,
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
        //   setTimeout(this.isAdded , 345);


      }

      else {
        
      }

      };
  render(){
      let showAlert;
      if(this.state.show == true && this.props.user){
        showAlert = (<SweetAlert
            show={this.state.show}
            title="It Added"
            text="SweetAlert in React"
             onConfirm={() => this.setState({ show: false })}
            />
            )
      }else {
        showAlert = (<SweetAlert
            show={this.state.show}
            title="Sorry, You cann't add it."
            text="You have to login (:"
             onConfirm={() => this.setState({ show: false })}
            />
            )
      }
     
    return(
      
      <div className="col-lg-3">
        <div className="card">
          <div className="card-body">
            <span>
              {
                this.props.button ? '' : 
                            <div>
                            <button className="badge badge-secondary  list-group-item-info" ref="btn"  onClick={() => {
                                this.handleSubmit()
                                this.setState({ show: true }) 
                                }
                                }>Add To Cart</button>
                                {showAlert}
                            </div>
                // <button className="badge badge-secondary  list-group-item-info" ref="btn" onClick={this.handleSubmit}>Add to cart</button>
              }
             
              </span> <br/>
              <name>{this.props.name} </name>
              <p>{this.props.artist}</p>
              <img src={this.props.image} alt="" className="card-img-top"/>
            </div>
        </div>
       <br/>
    </div>
    )
  }
}

