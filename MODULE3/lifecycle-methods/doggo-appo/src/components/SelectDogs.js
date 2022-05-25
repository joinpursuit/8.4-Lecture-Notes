/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

export default class SelectDogs extends Component {
    constructor(props) {
      super(props)
    }


  render() {
    return (
      <div>
        <input 
          type="text" 
          value={ this.props.dogNumber }
          onChange={ this.props.handleDogChange }/>
      </div>
    )
  }
}
