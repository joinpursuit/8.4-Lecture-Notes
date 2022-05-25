import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import SelectDogs from './components/SelectDogs';
import Dogs from "./components/Dogs"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      dogNumber : 1
    }
  }
  handleDogChange = (event) => {
    const { value } = event.target;
    this.setState({
      dogNumber: value
    })
  }
  
 render() {
    return (
   <div>
     our dog number is { this.state.dogNumber }
     <SelectDogs 
      handleDogChange = { this.handleDogChange } 
      dogNumber = { this.state.dogNumber }
     />
     <Dogs dogNumber = { this.state.dogNumber } />
     </div>

    )
  }
}



