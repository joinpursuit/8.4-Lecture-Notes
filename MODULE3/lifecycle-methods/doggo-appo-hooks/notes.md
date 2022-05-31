# Lifecycle Methods with Hooks

 - In class components we are able to create side effects during various stages in a components lifecycle by utilizing the React Component class' built in Lifecycle methods.
 - In order to replicate this behavior in our functional components we must use hooks.

## useEffect()

- `useEffect` is a hook from the React library which can allow us to add functionality to the component on mount, update, and unmount - just like a lifecycle method.
- In essence it allows us to reproduce the side effects of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

## useEffect as `componentDidMount`
- `useEffect` takes in up to two arguments, the first of which is a callback that will be executed after the first render **and every render afterwards**. In this callback, you can use state variables and methods.
    ```js
    useEffect(() => {
    // Code to be run on every render.
    });
    ```
- The second argument is optional and is always and array. 
- We can pass in an empty array to tell our `useEffect` hook to only run on mount - making it equivalent to a `componentDidMount`.

## useEffect as `componentDidUpdate`
- As previously mentioned, `useEffect` will run on every render. That means on every prop and state change, all of the code inside of our callback fuction will get executed. Essentially this functionality is equivalent to a `componentDidUpdate`
- We can have our `useEffect` code run only when certain values are changed or updated by adding those values to our dependency array (the second argument to our `useEffect` function).

## useEffect as `componentWillUnmount`
- Finally we can use `useEffect` to execute some code right before our component unmounts.
- The value we return from useEffect is a callback that React will call when the component is being unmounted.
    ```js
    useEffect(() => {
    // Code to be run on every render.
        return () => {
            // Code to be run right before component unmounts
        }
    });
    ```
- Remember that this is completely optional!!

