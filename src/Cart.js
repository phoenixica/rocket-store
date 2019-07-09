import React, {Component} from 'react';
import firebase, {GAuth, auth} from './firebaseConfig';


class Cart extends Component {
    state = ({
        addAlbum: '',
        allAlbums: [],
        user: ''
    });

    removeAlbum = (id) => {
        const rmv = firebase.database().ref(`/TeamRocketDB/${id}`);
        rmv.remove();
    };

    componentDidMount() {

        const arr = firebase.database().ref('TeamRocketDB');
        arr.on('value', (snap) => {
            let DBAlbum = snap.val();
            let albums = [];

            for (let content in DBAlbum) {
                albums.push({
                    id: content,
                    title: DBAlbum[content].title,
                    user: DBAlbum[content].user,
                    image: DBAlbum[content].image,
                    artist: DBAlbum[content].artist
                })
            }
            this.setState({
                allAlbums: albums
            })
        });
    }

    render() {
        return (
            <div>

                    <h1>You have {this.state.allAlbums.length} items in your cart</h1>
                <ul>
                    {this.state.allAlbums.map(s =>
                        <li key={s.id}>
                            {s.title}:
                            {/*<br/>Added by user is: {s.user}*/}
                            <p>{s.artist}</p>
                            <img src={s.image} alt="Nader is here"/>
                            <button onClick={() => this.removeAlbum(s.id)}>Delete album</button>
                            <hr/>

                        </li>)}
                </ul>
            </div>

        )
    }
}

export default Cart
