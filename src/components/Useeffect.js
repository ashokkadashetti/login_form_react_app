import React, {useState, useEffect} from "react";

function Useeffect(){
    const [count, setCount] = useState(0)
    const [calculation, setCalculation] = useState(0)

    // useEffect(() => {
    //     setCalculation(() => count * 2)
    // }, [count])

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1)
        }, 4000)
        return () => clearTimeout(timer) 
    }, [])

    return(
        <div>
            <h2>Number of times renderd {count}</h2>
        </div>
    )
}

export default Useeffect























// import React,{useState, useEffect} from "react";


// function Useeffect(){
//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         setTimeout(() => {
//             setCount((count) => count + 1) 
//         }, 4000)
//     })
//     return(
//         <div>Number of times renderd {count}</div>
//     )
// }

// export default Useeffect