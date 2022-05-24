# Lifecycle Methods In React

The component lifecycle is a term that refers to a React component's timeline in your browser. Components are created, render content, update that content, and are destroyed. At each of these stages, you may want to influence or change the behavior of your component. By default, React has its own behavior for what it will do at each of these stages. However, it provides methods to the React.Component class that hook into each individual event. You can use these methods to change how your component will behave.

## Lifecycle Methods

Lifecycle methods cut across both phases. They are divided into 3 main categories:

 - Mounting
 - Updating
 - Unmounting

### Mounting

Mounting refers to a component being created and inserted into the DOM. There are 3 main lifecycle methods that get called during the mounting stage:

1. constructor()  
    used to initialize component and set state
1. render() 
    required.  render creates JSX element to be mounted in the virtual DOM
1. componentDidMount()
    called ONCE after `render` has been called, the DOM is updated.

### Updating

1. render()
    can also be called in update if State changes or Props update ( this is automatic )
1. componnetDidUpdate()
    Think of it as a componentDidMount that fires whenever the component is re-rendered.   Allows us freedom to update things if props change IE network calls.  Can compare previous render state

### Unmounting

1. componentDidUnmount()
    Inside this method, you should remove subscriptions, cancel ongoing network requests, and invalidate timers. If those don't apply to your component, then you don't need to implement this method.

    Note that you shouldn't call setState() here. The component is about to unmount, so it will never be re-rendered.


