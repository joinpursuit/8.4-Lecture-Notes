import logo from './logo.svg';
import './App.css';
import Dogs from './comoponents/Dogs';
import SelectDogs from './comoponents/SelectDogs';
import { useState } from 'react'

function App() {
  const [dogsNum, setDogsNum] = useState(1)
  return (
    <div className="App">
      <Dogs num = { dogsNum } />
      <SelectDogs num ={ dogsNum } change = {setDogsNum}/>
    </div>
  );
}

export default App;
