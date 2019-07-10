import React,{ Component } from 'react';
import Nav from './Nav';
import About from './About';
import Products from './Products';
import Seller from './Seller';
import Home from './Home';
import Cart from '../Cart';
import Login from './../LoginTest';
import { Link , Route} from 'react-router-dom';
import './header.css';

// import logo from './rocket-store.svg';
import rocart from '../images/rocart-logo.png';
export default class Header extends Component 
{
    state= {
        user: ''
    }

    setUser = (user) => {
        this.setState({
            user: user
        })
    }
render()
{
return (

    <div>
    <nav className="navbar navbar-expand-sm bg-light navbar-fixed-top fonts ">
      <ul className="navbar-nav ">
        <li className="navbar-brand">
            <Link to='/'><img src={rocart} alt="Store" id='logo'/></Link>
        </li>
        <li className="nav-item fonts">
            <Link className="text-danger"  to='/albums'>All Albums</Link>
        </li>
        <li className="nav-item">
            <Link className="text-danger"  to='/about'>About</Link>
        </li>
        <li className="nav-item">
            <Link className="text-danger"  to='/search'>Find Album</Link>
        </li>
        <li className="nav-item">
            <Link className="text-danger"  to='/sell'>Sell Your Album</Link>
        </li>
        <li className="nav-item">
            <Link className="text-danger"  to='/cart'>View Cart</Link>
        </li>
        <li className="nav-item">
            <Link className="text-danger"  to='/LoginTest'>My page</Link>
        </li>
      </ul>
      </nav> 
      <br /><br />
      <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        {/*<Route exact path='/albums' component={Products}/>*/}
        <Route exact path='/albums' render={()=>{
            return (
                <Products user={this.state.user} />
            )
        }}/>
        <Route exact path='/sell' component={Seller}/>
        <Route exact path='/cart' render={()=>{
            return (
                <Cart user={this.state.user}/>
            )
        }}/>
        {/*<Route exact path='/LoginTest' component={Login}/>*/}
        <Route exact path='/LoginTest' render={()=>{
            return (
                <Login setUser={this.setUser} user={this.state.user}/>
            )
        }}/>
        <Route exact path='/search' component={Nav}/>
        <br /><br /><br /><br /><br /><br />
        </div>

);
}
}


