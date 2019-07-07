import React from 'react'


export default class List extends React.Component {
  
  render(){

    return(

        <li>
          <div>
            <h4>{this.props.name}</h4>
            <p>{this.props.artist}</p>
            <img src={this.props.image} alt=""/>
          </div>
        </li>
  
    )
  }
}
  
