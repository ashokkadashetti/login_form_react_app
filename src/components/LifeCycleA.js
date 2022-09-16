import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {

    constructor(){

        super()

        this.state = {
            name: 'Ashok'
        }
        console.log('LifeCycleA constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps');
        return null
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate');
    }
    
    componentDidMount(){
        console.log('LifeCycleA componentDidMount');
    }

    changeState = () =>{
        this.setState({
            name: 'Kadashetti'
        })
    }

    render(){
        console.log('LifeCycleA render')
        return(
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Click me</button>
                <LifeCycleB />
            </div>
           
        )
    }
}


export default LifeCycleA