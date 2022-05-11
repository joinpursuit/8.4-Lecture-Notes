import React, { Component, } from 'react'

export default class ClassForm extends Component {
   constructor(){
       super()
       this.state = {
       
        }
        // this.handleCheckChange = this.handleCheckChange.bind(this)
   }
   
   
  render() {
      
    return (
        <>
       
        
        <form className="form-container">
           
        <h2>User Information</h2>
        
        <label for ="not-robot">Are you a robot?</label>
          {/* Checkbox input  */}
          <input id="not-robot" 
          type="checkbox"
          />
        
          {/* Select Input */}
          <select >
            <option ></option>
            <option value="mr">Mr.</option>
            <option value="ms">Ms.</option>
            <option value="mrs">Mrs.</option>
            <option value="mx">Mx.</option>
            <option value="dr">Dr.</option>
          </select>
        {/* text input  */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
          />
         {/* text input  */}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            />
          <button type="submit">Submit</button>
        </form>
        </>
      );
  }
}
