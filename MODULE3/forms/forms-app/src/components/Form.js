import { useState } from 'react'
const Form = () => {
    const [isRobot, setIsRobot] = useState("");
    // useState returns an array with two items
    const [select, setSelect] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
    const handleCheck = (event) => {
        // this has to be a boolean value 
        setIsRobot(event.target.checked)
    }
    const handleSelect = (e) => {
        // const value = e.target.value
        const { value } = e.target;
        setSelect(value);
    }
    const handleFirstName = (e) => {
        const { value } = e.target;
        setFirstName(value);
    }
    const handleLastName = (e) => {
        const { value } = e.target;
        setLastName(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isRobot || !select || !firstName || !lastName){
            alert("fill out the form dude")
        } else {
            alert("form submitted - hooray")
            console.log(isRobot, select, firstName, lastName)
        }
    }


    return (
        <>
           <h2>User Information</h2>
           <h3> { isRobot ? "you are a robot" : "could be a robot.."} </h3>
           <h3> { select } { firstName } { lastName }!!!! </h3>

        <form onSubmit={handleSubmit} className="form-container">
        <label for ="not-robot">Are you a robot?</label>
          {/* Checkbox input  */}
          < input id="not-robot" 
            checked={ isRobot }
            type="checkbox"
            onChange={ handleCheck }
          />
          {/* Select Input */}
          <select 
          onChange={ handleSelect }
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
            onChange={ handleFirstName }
          />
         {/* text input  */}
          <input
            type="text"
            name="lastName"
            value = { lastName }
            placeholder="Last Name"
            onChange={ handleLastName }
            />
          <button type="submit">Submit</button>
        </form>
        </>
      );
};

export default Form;
