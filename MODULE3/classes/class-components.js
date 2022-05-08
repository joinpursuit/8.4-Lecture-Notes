// FUNCTIONAL COMPONENT

const Example = () => {
    return <h1> Hello World! </h1>;
}



// CLASS COMPONENT

import React from 'react';

class Example extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <h1> Hello World! </h1>;
    }
}






// EXAMPLES WITH PROPERTIES

//CLASS COMPONENT RENDERING PROPERTIES
import { Component } from 'react';

class Hello extends Component {
    constructor() {
        super()

        this.name = "Jimmy"
    }

    render() {
        return <h1> Hello {this.name}! </h1>
    }
}

export default Hello


//FUNCTIONAL COMPONENT RENDERING PROPERTIES

function Hello() {
    const name = "Jimmy"
    return <h1> Hello {name}</h1>
}

export default Hello