import React from 'react';
export default class Product extends React.Component {
render(){
    return(
        <div>
            <h1>
                {this.props.name}
            </h1>
            <h3>
                {this.props.artist}
            </h3>
            <a href={this.props.url}>
                {this.props.url}
            </a><br /><br />
            <div>
                <img src={this.props.image} alt=""/><br />
                <ul>{this.props.tracks.map((track, index)=><li key={index}>{track}</li>)}</ul>
            </div>
        </div>
        )
    }
}

