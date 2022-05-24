import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import SelectDogs from './components/SelectDogs';
import Dogs from "./components/Dogs"

export default class App extends Component {
 


 
  render() {
    return (
   <div>
     dog app with https://dog.ceo/api/breeds/image/random
     <Dogs />
     <SelectDogs />
     </div>

    )
  }
}



