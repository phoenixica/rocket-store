import React from 'react'
import Product from './Product';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './Nav.css';
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

    event.preventDefault()
    axios({
      url:`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${LFAPI_KEY}&artist=${this.state.album.artist}&album=${this.state.album.title}&format=json`,
      method: 'get',
  })
  .then((response) =>{
    //console.log(response)
      if(response.data.album){
        this.setState({
          selected: {
            name:response.data.album.name,
            artist:response.data.album.artist,
            url:response.data.album.url,
            image:response.data.album.image[3]['#text'],
            tracks:response.data.album.tracks.track.map(
                track => track.name
            )
          },
          album:{
            title:'',
            artist:''
          },
        })
      }
      else{
        this.setState({
          selected: {
            name:'No Results were found for the search',
            artist:'',
            url:'',
            image:'',
            tracks:[]
          },
          album:{
            title:'',
            artist:''
          },
        })
      }
      })
  }
  render(){

    return(
      <div>
        <Route exact path='/search' render={() => {
          return (
            <div className="container">
              <div className="form-group">
              <form onSubmit={this.handleSubmit}>
                Album:
                <input className="form-control mr-sm-2" placeholder="The Album" name="title"
                    value={this.state.album.title}
                    onChange={this.handleChange}
                    className="form-control"/>
                    <br />
                Artist:
                <input className="form-control mr-sm-2" placeholder="Artist Name"  name="artist"
                    value={this.state.album.artist}
                    onChange={this.handleChange}
                    className="form-control"/>
                    <br />
                <button type="submit" className="btn btn-secondary">
                  Search Result
                </button>
              </form>
              </div>
                <Product name={this.state.selected.name} artist={this.state.selected.artist} url={this.state.selected.url} image={this.state.selected.image} tracks={this.state.selected.tracks}/>
            </div>
          )}}
        />
      </div>
    )
  }
}

