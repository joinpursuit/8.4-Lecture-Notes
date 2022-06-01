/* eslint-disable no-useless-constructor */
import React from 'react'

const SelectDogs = ({handleDogChange, dogNumber}) => {
    // convert to functional componenent
    // get rid of render and change the way we access our properties and methods in our return

    return (
      <div>
        <input 
          type="text" 
          value={ dogNumber }
          onChange={ handleDogChange }/>
      </div>
    )
}

export default SelectDogs;