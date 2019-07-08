import React,{ Component } from 'react';
import Nav from './Nav';
import About from './About';
import Products from './Products';
// import Seller from './Seller';
import Home from './Home';
import { Link , Route} from 'react-router-dom';

export default class Header extends Component 
{
render()
{
return (
    <div>
        <ul>
            <li><Link to='/'>Rocket Store</Link></li>
            <li><Link to='/search'>Search Albums</Link></li>
            <li><Link to='/albums'>All Albums</Link></li>
            <li><Link to='/about'>About</Link></li>
           {/* // <li><Link to='/sell'>Sell Your Album</Link></li> */}
        </ul>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/albums' component={Products}/>
        {/* <Route exact path='/sell' component={Seller}/> */}
        <Nav />
    </div>
);
}
}


