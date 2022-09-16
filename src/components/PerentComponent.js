import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureCom from "./PureCom";
import RegComponent from "./RegComponent";


class PerentComponent extends Component {

    constructor(){
        super()

        this.state = {
            name: 'Ashok'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Ashok'
            })
        }, 2000)
    }

    render(){
        console.log('Perent Component');
        return(
            <div>
                <div>PerentComponent</div>
                <MemoComp name = {this.state.name} />
                {/* <PureCom name = {this.state.name}/>  */}
                {/* <RegComponent name = {this.state.name} /> */}
            </div>
        )
    }
}

export default PerentComponent