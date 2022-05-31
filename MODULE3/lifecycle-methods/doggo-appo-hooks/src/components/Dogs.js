/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
// import useEffect and useState above


export default class Dogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: [],
    };
  }
  // use useState to create imgUrl state

  // call useEffect to run getDogs function with our dogNumber when component mounts
  // add dogNumber to dependency array to rerun our function when dogNumber changes
  // return a cleanup function that will run when our component unmounts

  getDogs = (num = 1) => {
      fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(data => data.json())
        .then(json => {
          // use our useState func to update state
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
    // get rid of render and change the way we access our properties and methods in our return

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
