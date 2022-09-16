import React,{useState, useEffect} from "react";

function MoveOver(){

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mouseover', logMousePosition)
    }, [])

    return(
        <div>
            Hooks -x: {x}, y: {y}
        </div>
    )
}


export default MoveOver