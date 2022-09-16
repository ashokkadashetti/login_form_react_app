import React, { Component } from "react";


class ClickCounterTwo extends Component{

    render(){
        const { count, incrementCounter } = this.props
        return <button onClick={incrementCounter}>Clicked {count} Times</button>
    }
}


export default ClickCounterTwo