import React, { Component, } from 'react'

export default class ClassForm extends Component {
   constructor() {
       super()
       // in class we need to set state in the constructor
       this.state = {
        isRobot:false,
        firstName:"",
        lastName:"",
        select:"",
       }
    }
    /*  
        ***** NOTE ON FUNCTIONS AND CLASS COMPONENTS *****
        class components require an extra step to properly scope the function 
        to the component it is in.  To avoid a scope issue you MUST declare your 
        methods as fat arrow functions 
        
        IE:
        the following function will not work as intended when trying to update state
        because it is not 'bound' properly
        handleCheck(event) => {
        this.setState({
        isRobot : event.target.checked
        })
      }
      declaring the function with a fat arrow will circumvent this issue
       handleCheck = (event) => {
       this.setState({
        isRobot : event.target.checked
      })
     }

    */
    handleCheck = (event) => {
      // setIsRobot(event.target.checked) <-- hooks 
      this.setState({
        isRobot : event.target.checked
      })
  }
   handleSelect = (e) => {
      // const value = e.target.value
      // const { value } = e.target;  <---- hooks 
      // setSelect(value);
      const { value } = e.target
      this.setState({
        select: value
      })
  }
   handleFirstName = (e) => {
      // const { value } = e.target; <---- hooks 
      // setFirstName(value);
      const { value } = e.target
      this.setState({
        firstName: value
      })
  }
   handleLastName = (e) => {
      // const { value } = e.target;  <---- hooks 
      // setLastName(value);
      const { value } = e.target
      this.setState({
        lastName: value
      })
  }
   handleSubmit = (e) => {
      e.preventDefault();
      if(!this.state.isRobot || !this.state.select || !this.state.firstName || !this.state.lastName){
          alert("fill out the form dude")
      } else {
          alert("form submitted - hooray")
          console.log(this.state.isRobot, this.state.select, this.state.firstName, this.state.lastName)
      }
  }
   
   
  render() {
    // in render we can destructure our state keys to keep things DRYer
  const { isRobot, firstName, lastName, select } = this.state
    return(
    <>
    <h2>User Information</h2>
    <h3> { isRobot ? "you are a robot" : "could be a robot.."} </h3>
    <h3> { select } { firstName } { lastName }!!!! </h3>
    
 <form onSubmit={this.handleSubmit} className="form-container">
 <label for ="not-robot">Are you a robot?</label>
   {/* Checkbox input  */}
   < input id="not-robot" 
     checked={isRobot }
     type="checkbox"
     onChange={this.handleCheck }
   />
 
   {/* Select Input */}
   <select 
   onChange={this.handleSelect }
   value = { select }
   >
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
     value={ firstName }
     placeholder="First Name"
     onChange={ this.handleFirstName }
   />
  {/* text input  */}
   <input
     type="text"
     name="lastName"
     value = { lastName }
     placeholder="Last Name"
     onChange={ this.handleLastName }
     />
   <button type="submit">Submit</button>
 </form>
 </>
);
  }
}
