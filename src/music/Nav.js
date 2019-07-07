import React from 'react'

import Product from './Product';
import Products from './Products';
import { Link, Route } from 'react-router-dom';

export default class Nav extends React.Component {

  state={
    album:{
      title:'Cher',
      artist:'Cher'
    }
  }
  handleChange = (event) => {
        // get the users input
        const userInput = event.target.value;
        // get which input they typed in
        const inputName = event.target.name;
        // copy the state of formData
        const formDataCopy = Object.assign(this.state.album)
        // update the key in formData copy with the new value
        formDataCopy[inputName] = userInput
        // set the state with the updated formData
        this.setState({
          album: formDataCopy
        })
      }

  handleSubmit = (event) => { 
    
  }

  render(){
    
    return(
        <div>
          <form onSubmit={this.handleSubmit}>
            Album: 
            <input name="title" 
                value={this.state.album.title}
                onChange={this.handleChange}></input>
            Artist: 
            <input name="artist" 
                value={this.state.album.artist}
                onChange={this.handleChange}></input>
            <button type="submit"><Link to='/album'>Search Result</Link></button>
          </form>
          <Route exact path='/album' 
          render={() => <Product title={this.state.album.title} artist={this.state.album.artist}/>}
          />
          <Route exact path='/music' component={Products}/>
        </div>
    )
  }
}
  
