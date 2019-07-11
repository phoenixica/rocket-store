import React from 'react'

// import '../index.css';
import facebook from '../images/icons8-facebook-old-100.png';
import twitter from '../images/icons8-twitter-100.png';
import instagram from '../images/icons8-instagram-100.png';
import youtube from '../images/icons8-play-button-100.png';

// import { Link, Route } from 'react-router-dom';
// import Product from './Product';
// import { Button } from 'react-bootstrap';

const stl = {
    width: 55,
    height: 55

}
export default class Home extends React.Component {

render(){
    return(
        <div >
            <br/>
         <center>
         <img src={twitter} alt="3" style={stl}/>
         <img src={facebook} alt="2" style={stl}/>
         <img src={instagram} alt="1" style={stl}/>
         <img src={youtube} alt="4" style={stl}/>
       </center>

       
        
            
        </div>
     
         
   )
    }
}

