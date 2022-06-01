/* eslint-disable no-useless-constructor */
import React, { useEffect, useState } from "react";
// import useEffect and useState above

 const Dogs = ({dogNumber}) => {
 
  const [imgUrls, setImgUrls] = useState([]);
  // use useState to create imgUrl state

  // call useEffect to run getDogs function with our dogNumber when component mounts
  // add dogNumber to dependency array to rerun our function when dogNumber changes
  // return a cleanup function that will run when our component unmounts

  const getDogs = (num = 1) => {
      fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(data => data.json())
        .then(json => {
          // use our useState func to update state
            setImgUrls(json.message)
        })
        .catch(err => console.log(err))
  }

  useEffect(() => {
    getDogs(dogNumber)
    return () => {
      console.log("This component unmounted duh!")
    }
  }, [dogNumber])
  // componentDidMount() {
  //     this.getDogs(this.props.dogNumber)
  // }
  // componentDidUpdate(prevProps) {
  //     console.log(prevProps)
  //     if(prevProps.dogNumber !== this.props.dogNumber) {
  //       this.getDogs(this.props.dogNumber)
  //     }
  // }
  
  
    // get rid of render and change the way we access our properties and methods in our return

    return (
      <div>
          {/* <button onClick={ this.getDogs }>get a dog</button> */}
          { imgUrls.map(img => {
              return ( <img src={ img }  alt ="dog pic" height = "200" key = {img}/> )
          })}
        
      </div>
    );
}

export default Dogs;
