import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import SelectDogs from './components/SelectDogs';
import Dogs from "./components/Dogs"

const App = () => {
  // convert to functional componenent
  const [dogNumber, setDogNumber] = useState(1)

  const handleDogChange = (event) => {
    const { value } = event.target;
    setDogNumber(value) 
    // use our useState func to change dogNumber value
  }
  // convert handleDogChange method to be a variable

    // get rid of render and change the way we access our properties and methods in our return
    return (
      <div>
        our dog number is {dogNumber}
        <SelectDogs
          handleDogChange={handleDogChange}
          dogNumber={dogNumber}
        />
        {dogNumber < 10 ? <Dogs dogNumber={dogNumber} /> : null}
      </div>
    )
}
export default App;

