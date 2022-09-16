import React, { Component } from "react";

class UserGreeting extends Component {
    constructor(){
        super()

        this.state = {
            isLoggedIn: false
        }
    }

    render(){

        return this.state.isLoggedIn && <div>Hello Ashok</div>

        // return this.state.isLoggedIn ? (
        //     <div>Hello Ashok</div>
        // ) : (
        //     <div>Hello Guest</div>
        // )

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Hello Ashok</div>
        // } else {
        //     message = <div>Hello  Guest</div>
        // }

        // return <div>{message}</div>

        // if(this.state.isLoggedIn){
        //     return(
        //         <h1>Hello Ashok</h1>
        //     )
        // } else{
        //     return(
        //         <h1>Hello Guest</h1>
        //     )
        // }
        // return(
        //     <h1>Hello Ashok</h1>
        // )
    }
}

export default UserGreeting