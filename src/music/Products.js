import React from 'react';
import axios from 'axios';
import List from './List';
const LFAPI_KEY='5fbde430b114ee63de9bbea86b2bf8cb';


export default class Product extends React.Component 
{
    state={
      album:[],
      search:'d'
    }
  componentDidMount() {
      axios({
        url:`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${this.state.search}&api_key=${LFAPI_KEY}&format=json`,
        method: 'get',
      })
      .then((response) => {
        // console.log(response.data.results.albummatches.album)
        this.setState({
          album:response.data.results.albummatches.album
        })
        }) 
      .catch(()=>{
        // code for if the request fails
      }) 
  }
  render()
  {
    const albums = this.state.album.map((album,index) =>
      <List 
        key={index}
        id={index}
        name={album.name}
        artist={album.artist}
        image={album.image[3]['#text']}
      />
    )

        return (
          <div className="container">
            <div className="row">
                {albums}
            </div>
          </div>
        );
    }

    
}


