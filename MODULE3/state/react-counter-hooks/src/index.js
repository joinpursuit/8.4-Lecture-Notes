import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";


const Counter = () => {
  const [count, setCount] = useState(0)

  debugger

  const incrementCount = () => {
    // passing our function the new value of what we want our state to be
    setCount(count+1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <p>
        <strong>Current Count: </strong> {count}<br/>
      </p>
      {/* REFACTOR */}
      <button onClick={incrementCount}>click here + 1</button>
      <button onClick={decrementCount}>click here - 1</button>
    </div>
  );
}

// class Counter extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }
//   }

//   incrementCount = () => {
//     this.setState({
//       count: ++this.state.count
//     })  
//   };

//   decrementCount = () => {
//     this.setState({
//       count: --this.state.count
//     })  
//   };

//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <p>
//           <strong>Current Count: </strong> {count}
//         </p>
//         {/* the `onClick` on our button is our event listener */}
//         {/* we set a callback function (our event handler) as the value to our event listener */}
//         <button onClick={this.incrementCount}>click here + 1</button>
//         <button onClick={this.decrementCount}>click here - 1</button>
//       </div>
//     );
//   }
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
