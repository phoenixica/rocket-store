import React from 'react';
import axios from 'axios';
// import { thisExpression } from '@babel/types';

const LFAPI_KEY='5fbde430b114ee63de9bbea86b2bf8cb';

export default class Product extends React.Component {

    state={
        name:'',
        artist:'',
        url:'',
        image:'',
        tracks:[]
    }

componentDidMount() {
    
    axios({
        url:`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${LFAPI_KEY}&artist=${this.props.title}&album=${this.props.artist}&format=json`,
        method: 'get',
    })
    .then((response) => {
        // console.log(this.props.name);
        console.log(response)
        this.setState({
            name:response.data.album.name,
            artist:response.data.album.artist,
            url:response.data.album.url,
            image:response.data.album.image[3]['#text'],
            tracks:response.data.album.tracks.track.map(
                track => track.name
            )
        })
        
        }) 
    .catch(()=>{

    }) 
}

render(){
    

return(

    <div>
        <h1>
            {this.state.name}
        </h1>
        <h3>
            {this.state.artist}
        </h3>
        <a href={this.state.url}>Last.fm Profile</a><br /><br />
        <div>
        <img src={this.state.image} alt=""/><br />
        <h3>Tracks:</h3>
        <ul>{this.state.tracks.map(x=><li>{x}</li>)}</ul>
        </div>
    </div>
    

)
}
}

