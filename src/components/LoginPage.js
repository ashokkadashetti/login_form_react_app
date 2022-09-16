import React, { Component } from "react";
import Validation from "./Validation";


class LoginPage extends Component {

    constructor(){
        super()

        this.state = {
             uname: '',
             pwd: ''
        }
    }

    unameHandler = (e) => {
        this.setState({
            uname: e.target.value
        })
    }

    pwdHandler = (e) => {
        this.setState({
            pwd: e.target.value
        })
    }

    submitHandler = (e) => {
        alert (`${this.state.uname} ${this.state.pwd}`)
        e.preventDefault()

    }

    render(){
        
        const {uname, pwd} = this.state

        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type='text' value={uname} onChange={this.unameHandler}/>
                    </div>
                    <div>
                        <input type='text' value={pwd} onChange={this.pwdHandler}/>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <Validation uname={uname} pwd={pwd} />
            </div>
        )
    }
}

export default LoginPage