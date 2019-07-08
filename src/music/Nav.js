import React from 'react'
import Product from './Product';
import Products from './Products';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

const LFAPI_KEY='5fbde430b114ee63de9bbea86b2bf8cb';

export default class Nav extends React.Component {

  state={
    album:
      {
        title:'',
        artist:''
      },
      selected: {
        name:'',
        artist:'',
        url:'',
        image:'',
        tracks:[]
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
    event.preventDefault();
    
    
    axios({
      url:`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${LFAPI_KEY}&artist=${this.state.album.artist}&album=${this.state.album.title}&format=json`,
      method: 'get',
  })
  .then((response) => {
      // console.log(this.props.name);
      //console.log(response)
      this.setState({
        selected: {
          name: response.data.album.name,
          artist: response.data.album.artist,
          url: response.data.album.url,
          image: response.data.album.image[3]['#text'],
          tracks: response.data.album.tracks.track.map(
              track => track.name
          )
        },
        album: {
          title:'',
          artist:''
        },
      })
      
      }) 
  };

  render(){
    
    return(
        <div>

            <header>
                <button onClick={this.login}>Google Login</button>
            </header>
          <Route exact path='/' render={() => {
            return (
              <div>
                <form onSubmit={this.handleSubmit}>
                  Album: 
                  <input name="title" 
                      value={this.state.album.title}
                      onChange={this.handleChange} />
                  Artist: 
                  <input name="artist" 
                      value={this.state.album.artist}
                      onChange={this.handleChange} />
                  <button type="submit">
                    Search Result
                  </button>
                </form>
                <button><Link to='/albums'>All Albums</Link></button>
                  
                <Product name={this.state.selected.name} artist={this.state.selected.artist} url={this.state.selected.url} image={this.state.selected.image} tracks={this.state.selected.tracks}/>
              </div>
            )}}
          />
          <Route exact path='/albums' component={Products}/>
        </div>
    )
  }
}
  
