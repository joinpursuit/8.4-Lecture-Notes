# Forms
- Forms are how users interact with our apps.  Whether login information, credit card payments, or a dynamic shopping cart, Forms are how our users communicate to our applicaitons.
- State and Forms - In react we track the value of our forms using state rather than the DOM.
- Event listener - Lives on our JSX elements and get fired when the necessary action is performed.  React has many of these built in.  Today we focus on
    ```js
    onChange()  // used for recording any update in the form 
    onSubmit() // used for the submission of forms usually with multiple values
    ```
- [Flow_diagram_here](https://miro.com/app/board/uXjVO1wJ-gQ=/?share_link_id=842114129740)

## Vocabulary
- Controlled Component - An input that is bound to our state in our application.  The value of the input is tracekd in a state variable rather than the browsers widow object.
- Uncontrolled Componnet - Any react input that is not bound to a state variable
- Value - built in property of inptus that tracks the input from a user. In react we connet our input values to state variables.

## Note App
  
   - We have two components - App and Form / ClassForm;
   - Setting state in Form  - what do we need?
   - Controlling our Inputs with state;
   - Attaching event listeners to form fields;
   - Creating handlerFunctions to handle our form change
   - BONUS:  Lifting state up - updtaing App componnet from an event on the Form
   - BONUS BONUS: Display changes from Form component in a sibling component with state from App
