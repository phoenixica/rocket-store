import React, {Component} from 'react';
import firebase, {GAuth, auth} from './firebaseConfig';


class Cart extends Component {
    state = ({
        addAlbum: '',
        allAlbums: [],
        user: null
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
            user: this.state.user.displayName

        };
        arr.push(item);
        // this.setState({
        //     allAlbums: getUpdated
        // })
        // });
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

        // here is the best place to add content to the page
        // When user log in this 'componentDidMount' will be triggered and reload the whole content from google DB

        //Google provides a snapshot function which i used to retrieve data from DB
        // it also allowed me to update content in the page

        const arr = firebase.database().ref('TeamRocketDB');
        arr.on('value', (snap) => {
            let DBAlbum = snap.val();
            let albums = [];

            // Loop through my firebase storage and show its content for autherized users
            //contents represents the data object in google DB. im looping and retriving the object and


            // Also id is helpful when deleting item from cart

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

        //When the user refreshes th page im going to maintain last sign in and log him in accordingly
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({user})
            } else {
                this.setState({user: null})
            }
        })
    }

    login = () => {

        //I have to provide the GAuth here
        auth.signInWithPopup(GAuth)
            .then((res) => {
                const user = res.user;
                this.setState({
                    user
                })
            });
    };

    logout = () => {
        //Nothing fancy, im clearing the state for the user
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                })
            })
    };

    testing = () => {
        console.log('Nader is testing here');
    };

    unAuthToDelete = () => {
        alert('You do not have access to delete');

    };

    render() {
        return (
            <div>
                <h1>My Albums</h1>

                {this.state.user ?
                    <button onClick={this.logout}>Log Out</button>
                    :
                    <button onClick={this.login}>Log in</button>
                }


                {this.state.user
                    ?
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                               onChange={this.handleChange}
                               value={this.state.user.displayName}
                        />
                        <input type="text" name="addAlbum"
                               placeholder="What song do you want?"
                               onChange={this.handleChange}
                               value={this.state.addAlbum}
                        />

                        <button>Add to cart</button>
                        <h2>Welcome: {this.state.user.displayName}</h2>
                        <h3>Assigned email: {this.state.user.email}</h3>
                        <img src={this.state.user.photoURL} alt="nader" width={'55px'}/>

                    </form>
                    :
                    <h2 style={{color: 'red'}}>Please login to add to your cart </h2>
                }

                <ul>
                    {this.state.allAlbums.map(s =>
                        <li key={s.id}>
                            {s.title}:
                            <br/>Added by user is: {s.user}
                            {this.state.user.displayName === s.user
                                ?
                                <button onClick={() => this.removeAlbum(s.id)}>Delete album</button>
                                :
                                <button onClick={this.unAuthToDelete}>Delete album</button>

                            }
                        </li>)}
                </ul>
            </div>

        )
    }
}

export default Cart;