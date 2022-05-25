/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

export default class Dogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: [],
    };
  }
  getDogs = (num = 1) => {
      fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(data => data.json())
        .then(json => {
            this.setState({
               imgUrl:json.message 
            })
        })
        .catch(err => console.log(err))
  }
  componentDidMount() {
      this.getDogs(this.props.dogNumber)
  }
  componentDidUpdate(prevProps) {
      console.log(prevProps)
      if(prevProps.dogNumber !== this.props.dogNumber) {
        this.getDogs(this.props.dogNumber)
      }
  }
  
  render() {
    return (
      <div>
          {/* <button onClick={ this.getDogs }>get a dog</button> */}
          { this.state.imgUrl.map(img => {
              return ( <img src={ img }  alt ="dog pic" height = "200" key = {img}/> )
          })}
        
      </div>
    );
  }
}
