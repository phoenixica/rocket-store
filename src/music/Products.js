import React from 'react';
import axios from 'axios';
import List from './List';

const LFAPI_KEY='5fbde430b114ee63de9bbea86b2bf8cb';

export default class Product extends React.Component 
 {
      state={
        album:[],
        search:'f'
      }
  componentDidMount() {
      axios({
        // url: `${'https://cors-anywhere.herokuapp.com/'}http://api.onemusicapi.com/20151208/disc?freeDbDiscId=4f06d108&track.1.offset=150&track.2.offset=16541&track.3.offset=30314&track.4.offset=46236&track.5.offset=62800&track.6.offset=79492&track.7.offset=95384&track.8.offset=112719&track.leadout.offset=131099&inc=images&maxResultCount=20&aggregated=first`,
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
                name={album.name}
                artist={album.artist}
                image={album.image[3]['#text']}
              />
            )

        return (
              <div className="App">
                <header>Record Store</header>
                <ul>
                {albums}
                </ul>
              </div>
        );
    }

}


