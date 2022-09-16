import React from "react";

function ChildComponent(props){
    return(
        <button onClick={() => props.greetHandler('Child')}>Parent click</button>
    )
}

export default ChildComponent