import React from 'react';
import firebase from "../firebaseConfig";
// // import swal from '@sweetalert/with-react';
// import SweetAlert from 'sweetalert2-react';

export default class Product extends React.Component {

    state = ({
        //addAlbum: '',
        allAlbums: [],
        user: ''
    });

    isAdded = () => {
        alert('"'+this.props.name +'" is added to your cart');
// swal({
//     content: <div>Hello world!</div>,
//     buttons: true,
//   });

//     <SweetAlert
//     show={this.state.show}
//     title="Demo"
//     text="SweetAlert in React"
//     onConfirm={() => this.setState({ show: false })}
//   />
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

        this.refs.btn.setAttribute('disabled' , 'Added');

        setTimeout(this.isAdded , 345);
    };

    render(){
    return(
        <div className="card">
             
            <h1 className="card-title">
                
                {this.props.name}
            </h1>
            <h3>
                {this.props.artist}
            </h3>
            <a href={this.props.url}>
                {this.props.url}
            </a><br /><br />
            <div>
                <img src={this.props.image} alt=""/><br />
                <ul>{this.props.tracks.map((track, index)=>
                    <li key={index}
                    id={index} className="card-text">{track}</li>)}


                    { this.props.image ?
                        <button  className="btn btn-primary  list-group-item-info"  ref="btn" onClick={this.handleSubmit}>Add to cart</button>
                        :
                        <h3>Use the form above to lookup an album</h3>
                    }
                </ul>
            </div>
        </div>
        )
    }
}

