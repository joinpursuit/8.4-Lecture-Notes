import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.count = 0
    // We define this.state inside the constructor function and set it equal to and object
    // IMPORTANT: OUR STATE SHOULD ALWAYS BE AN OBJECT!!!!!
    
    // Let's create state in our component by setting this.state equal to an object that takes 
  }

  // THIS IS OUR EVENT HANDLER
  handleClick = () => {
    
    this.count += 1
    
    // once we've created our state lets update our count by incrementing it by 1 in this event handler using `this.setState` when a user clicks the button
    // Remember! That this.setState must take in an object with key value pairs corresponding to the slice of state we want to update

  };

  render() {
    //CRITICAL THINKING: Why can I destructure cunt from this as seen below?
    const { count } = this;
    // lets set count to a variable here by destructuring state instead of this
    return (
      <div>
        <p>
          <strong>Current Count: </strong> {count}
        </p>
        {/* the `onClick` on our button is our event listener */}
        {/* we set a callback function (our event handler) as the value to our event listener */}
        <button onClick={this.handleClick}>click here + 1</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
