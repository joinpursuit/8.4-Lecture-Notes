import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import SelectDogs from './components/SelectDogs';
import Dogs from "./components/Dogs"

export default class App extends Component {
  // convert to functional componenent
  constructor() {
    super()
    this.state = {
      dogNumber: 1
    }
    // use useState to create dogNumber state
  }

  handleDogChange = (event) => {
    const { value } = event.target;
    this.setState({
      dogNumber: value
    })
    // use our useState func to change dogNumber value
  }
  // convert handleDogChange method to be a variable

  render() {
    // get rid of render and change the way we access our properties and methods in our return

    return (
      <div>
        our dog number is {this.state.dogNumber}
        <SelectDogs
          handleDogChange={this.handleDogChange}
          dogNumber={this.state.dogNumber}
        />
        <Dogs dogNumber={this.state.dogNumber} />
      </div>

    )
  }
}



