import React, {Component} from 'react';
import firebase, {GAuth, auth} from './firebaseConfig';
import Cart from "./Cart";
import { withRouter } from 'react-router-dom'

import List from "./music/List";


class Login extends Component {
    // state = ({
    //     user: null
    // });

    componentDidMount() {

        // auth.onAuthStateChanged(user => {
        //     if (user) {
        //         this.props.setUser(user)
        //     } else {
        //         this.props.setUser(null)
        //     }
        // })
    }

    login = () => {
        auth.signInWithPopup(GAuth)
            .then((res) => {
                const user = res.user.displayName;
                //console.log(res.user.displayName)
                this.props.setUser(user)
            });


        //console.log(this.state.user)
        // this.props.history.push('./music/List');
    };

    logout = () => {
        auth.signOut()
            .then(() => {
                this.props.setUser( null)
            })
    };

    render() {
        return (
            <div className="container">
                {this.props.user ?
                    <button className="btn btn-secondary btn-lg btn-block"  onClick={this.logout}>Log Out</button>
                    :
                    <button className="btn btn-secondary btn-lg btn-block" onClick={this.login}>Log in</button>
                }

                {this.props.user
                    ?
                    <div>
                        {/*<img src={this.state.user.photoURL} alt="nader" width={'55px'}/>*/}
                        {/*<Cart*/}
                        {/*    user={this.props.user}*/}
                        {/*    avatar={this.props.user.photoURL}*/}
                        {/*/>*/}
                    </div>

                    :
                    <h2 style={{color: 'red'}}>Please login to access your cart </h2>
                }
            </div>

        )
    }
}

export default Login;