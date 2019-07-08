import React from 'react'
import firebase from '../firebaseConfig'

export default class List extends React.Component {

    state = ({
        //addAlbum: '',
        allAlbums: [],
        user: ''
    });

    handleSubmit = (event) => {

            event.preventDefault();
            //if(this.state.user == ''){
                       // alert("Login please (:")
            //}else {
                //  console.log(this.props.name);
                const arr = firebase.database().ref('TeamRocketDB');
                const item = {
                    title: this.props.name,
                    // Same here whether assigning the user name or email if not provided
                    // user: this.state.user
                };

                arr.push(item);

                this.setState({
                    addAlbum: '',
                    user: ''
                })
         //   }

    };

  render(){

    return(

        <li>
          <div>
              <h4>{this.props.name}</h4>
              <p>{this.props.artist}</p>
              <img src={this.props.image} alt=""/>


                  <button onClick={this.handleSubmit}>Add to cart</button>


              <ul>
                  {this.state.allAlbums.map(s =>
                      <li key={s.id}>
                          {s.title}:
                          <br/>Added by user is: {s.user}

                          <button onClick={() => this.removeAlbum(s.id)}>Delete album</button>
                      </li>)}
              </ul>
          </div>
        </li>
  
    )
  }
}

