# State
- `state` is React's way of storing, handling, and using information in a way that triggers a re-render
- `this.state` is a special property in React that will allow our component to have their own state
 - What will trigger a re-render of a React component?
    - A change in the component's state
    - A change in the parent component's state
  ## Vocabulary
    - this.setState - A function that we will use that comes native to React's Component class that allows us to update state. NEVER EVER try to update state directly.
    - Event listener - Lives on our JSX elements and get fired when the necessary action is performed
    - Event handler - A callback function that we create that will executed some code when our even listener is triggered

  ## Counter App
    - Counter component is created
    - constructor function runs
    - this.state is initialized and assigned a value (0)
    - render function runs
    - JSX is rendered
    - JSX includes the current state value (0)
    - onClick event listener is bound to this.handleClick
    - user clicks button
    - handleClick function runs
    - this.setState runs
    - this.state.counter is now 1
    - setState triggers a re-render
    - new state value is displayed on the screen