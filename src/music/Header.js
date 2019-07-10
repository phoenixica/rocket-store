import React,{ Component } from 'react';
import Nav from './Nav';
import About from './About';
import Products from './Products';
import Seller from './Seller';
import Home from './Home';
import Cart from '../Cart'
import { Link , Route} from 'react-router-dom';
import './Header.css';



export default class Header extends Component 
{
render()
{
return (
    <div  className="NavBar">
        <ul className='list-group list-group-horizontal'>
            <li  className="list-group-item list-group-item-info"><Link to='/'>Rocket Store</Link></li>
            <li className="list-group-item" ><Link to='/search'>Search Albums</Link></li>
            <li className="list-group-item"><Link to='/albums'>All Albums</Link></li>
            <li className="list-group-item"><Link to='/about'>About</Link></li>
            <li className="list-group-item"><Link to='/sell'>Sell Your Album</Link></li>
            <li className="list-group-item"><Link to='/cart'>View Cart</Link></li>
        </ul>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/albums' component={Products}/>
        <Route exact path='/sell' component={Seller}/>
        <Route exact path='/cart' component={Cart}/>
        <Nav />
    </div>





);
}
}


