import  {useState} from 'react'

export default function Dogs({num}) {
    const [ dogsData, setDogsData ] = useState([]);
    
    const getDogData = async (num) => {
        try {
            const data = await fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
            const json = await data.json();
            setDogsData(json)
        } catch(err) {
            console.log(err)
        }
    }
    /* ************** NOTE *******************
        
    Above is the MODERN WAY of handling PROMISES in JS 

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#description

    We call this `Async/Await`

        By using the `async` keyword before our anonymous function
        we can use the `await` keyword before our function execution.
        on line 17 we are setting the variable `data` to the value returned from 
        our `fetch()` call.  

        Because we are inside of an `async` function and the `fetch` call has been
        prepended with `await` javascript will wait until the promise returns 
        before passing values to `data`

        Async/Await funcitonaly works the same as calling `.then()` after an asynchronus
        function that returns a promise
        
        our next step would be to invoke our getDogData() function inside of a 
        componentDidUpdate() call.
        But, since we are using a funtion componnet we need to use a hook called 
        
        `useEffect()`
        https://reactjs.org/docs/hooks-effect.html

     */
    

return (
    <div>
        { dogsData.map( dog => {
            return <img src={dog} alt="it's a dog" key={dog}/>
        })}
    </div>
  )
}
