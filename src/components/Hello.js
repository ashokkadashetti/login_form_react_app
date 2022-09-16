import React from "react";


const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello world!</h1>
    //     </div>
    // )

    return React.createElement('div', {id: 'color', className:'tags'}, React.createElement('h1', null, 'Hello world..!'))
}

export default Hello