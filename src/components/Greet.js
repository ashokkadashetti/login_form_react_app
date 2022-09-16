import React from 'react'

// function Greet(){
//     return <h1>Hello world!!!</h1>
// }

const Greet = props => {
    const {name, color, children} = props
    return (
        <div>
            <h1>Hello {name} color {color}</h1>
            {children}
        </div>
    )
}

export default Greet