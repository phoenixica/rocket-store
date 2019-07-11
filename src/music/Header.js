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

    <div > 
    <nav className="navbar navbar-expand-sm bg-light navbar-fixed-top fonts text-danger colory "  >
      <ul className="navbar-nav text-danger">
        <li className="navbar-brand">
            <Link to='/'><img src={rocart} alt="Store" id='logo'/></Link>
        </li>
        <li className="nav-item text-danger ">
            <Link to='/albums' className="text-danger ">All Albums</Link>
        </li>
        <li className="nav-item">
            <Link to='/about' className="text-danger ">About</Link>
        </li>
        <li className="nav-item">
            <Link to='/search'  className="text-danger ">Find Album</Link>
        </li>
        <li className="nav-item">
            <Link to='/sell'  className="text-danger ">Sell Your Album</Link>
        </li>
        <li className="nav-item">
            <Link to='/cart'  className="text-danger ">View Cart</Link>
        </li>
        <li className="nav-item">
            {this.state.user ?

                <Link to='/LoginTest'  className="text-warning ">Logout</Link>

                :
                <Link to='/LoginTest'  className="text-warning ">Login</Link>
            }
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


