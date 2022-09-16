import React, { Component } from "react";

class Increment extends Component{
    
    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    eventHandler(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <div>
                <button onClick={() => this.eventHandler()}>Increment {this.state.count}</button>
            </div>
        )
    }
}


export default Increment