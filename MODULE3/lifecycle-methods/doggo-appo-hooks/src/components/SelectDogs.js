/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

export default class SelectDogs extends Component {
    // convert to functional componenent
    constructor(props) {
      super(props)
    }


  render() {
    // get rid of render and change the way we access our properties and methods in our return

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
