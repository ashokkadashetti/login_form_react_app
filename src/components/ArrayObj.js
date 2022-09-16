import React,{useState} from "react";

function ArrayObj(){

    const [items, setItems] = useState([])

    const addItems = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    
    return(
        <div>
            <button onClick={addItems}>Add a item</button>
            {
                items.map(item => <li key={item.id}>{item.value}</li>)
            }
        </div>
    )
}

export default ArrayObj