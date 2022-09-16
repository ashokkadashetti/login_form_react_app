import React, { Component } from "react";

class LifeCycleB extends Component {

    constructor() {
        super()

        this.state = {
            name: 'KD'
        }
        console.log('LifeCycleB constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB getDerviedStateFromProps');
        return null
    }

    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate');
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount');
    }

    render() {
        console.log('LifeCycleB render');
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}


export default LifeCycleB