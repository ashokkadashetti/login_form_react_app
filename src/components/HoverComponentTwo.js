import React, { Component } from "react";

class HoverComponentTwo extends Component{

    render(){
        const { count, incrementCounter } = this.props
        return <h2 onMouseOver={incrementCounter}>Hover {count} Times</h2>
    }
}

export default HoverComponentTwo