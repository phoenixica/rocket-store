import React, {Component} from 'react';
import firebase, {GAuth, auth} from './firebaseConfig';


class Cart extends Component {
    state = ({
        addAlbum: '',
        allAlbums: [],
        user: ''
    });

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value

        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const arr = firebase.database().ref('TeamRocketDB');
        const item = {
            title: this.state.addAlbum,
            // Same here whether assigning the user name or email if not provided
            user: this.state.user

        };
        arr.push(item);

        this.setState({
            addAlbum: '',
            userName: ''
        })
    };
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
                    user: DBAlbum[content].user
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
                <h1>My Albums</h1>

                {/*<form onSubmit={this.handleSubmit}>*/}
                {/*    <input type="text" name="user"*/}
                {/*           onChange={this.handleChange}*/}
                {/*           value={this.state.user}*/}
                {/*    />*/}
                {/*    <input type="text" name="addAlbum"*/}
                {/*           placeholder="What song do you want?"*/}
                {/*           onChange={this.handleChange}*/}
                {/*           value={this.state.addAlbum}*/}
                {/*    />*/}

                {/*<button>Add to cart</button>*/}
                {/*<h2>Welcome: {this.state.user.displayName}</h2>*/}
                {/*<h3>Assigned email: {this.state.user.email}</h3>*/}
                {/*<img src={this.state.user.photoURL} alt="nader" width={'55px'}/>*/}

                {/*</form>*/}

                <ul>
                    {this.state.allAlbums.map(s =>
                        <li key={s.id}>
                            {s.title}:
                            <br/>Added by user is: {s.user}

                            <button onClick={() => this.removeAlbum(s.id)}>Delete album</button>
                        </li>)}
                </ul>
            </div>

        )
    }
}