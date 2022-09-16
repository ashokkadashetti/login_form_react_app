import React, { Component } from "react";
import withComponent from "./withComponent";


class HoverCounter extends Component {

    render() {
        const { count, incrementCounter } = this.props
        return (
            <h2 onMouseOver={incrementCounter}>{this.props.name} Hover {count} times</h2>
        )
    }
}


export default withComponent(HoverCounter, 4)