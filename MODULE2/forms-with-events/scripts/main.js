// get a handle on our form and the counter to update
const form = document.querySelector("#new-contact");
const counter = document.querySelector(".contact-count")

// add an event listener to our form 
form.addEventListener("submit", (event) => {
    // our event 'e' for short invokes `preventDefault()` to sotp page refresh
    event.preventDefault()
    // here we use desctructuring assigment to create 5 variable to from our event.target
    const { name, phone, email, notes, type } = event.target
    // pass the values in to  our generateContact function
    generateContact(name.value, phone.value, email.value, notes.value, type.value)
    // access all the <li> tags as a nodeList
    const list = document.querySelectorAll("li") // <----- nodeList 
    // here we se the textContent to the .length property of our variable `list`
    counter.textContent =  list.length; 
    form.reset()
  })