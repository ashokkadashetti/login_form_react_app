import React, { Component } from "react";


class Form extends Component {

    constructor() {
        super()

        this.state = {
            username: '',
            comment: '',
            topic: 'react'
        }
    }

    handlerUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlerCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handlereTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }



    render() {
        const { username, comment, topic } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username : </label>
                    <input type='text' value={username}
                        onChange={this.handlerUsernameChange}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comment}
                        onChange={this.handlerCommentChange}></textarea>
                </div>
                <div>
                    <label>Topic : </label>
                    <select value={topic} onChange={this.handlereTopicChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='javascript'>Javascript</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form


























// import React, { Component } from "react";

// class Form extends Component {

//     constructor() {
//         super()

//         this.state = {
//             username: '',
//             comment: '',
//             topic: 'react'
//         }
//     }

//     handlerUsernameChange = (event) => {
//         this.setState({
//             username: event.target.value
//         })
//     }

//     handlerCommentChange = (event) => {
//         this.setState({
//             comment: event.target.value
//         })
//     }

//     handlerTopicChange = (event) => {
//         this.setState({
//             topic: event.target.value
//         })
//     }

//     render() {
//         return (
//             <form>
//                 <div>
//                     <label>Username : </label>
//                     <input type='text' value={this.state.username}
//                         onChange={this.handlerUsernameChange}></input>
//                 </div>
//                 <div>
//                     <label>Comments : </label>
//                     <textarea value={this.state.comment}
//                         onChange={this.handlerCommentChange}></textarea>
//                 </div>
//                 <div>
//                     <select value={this.state.topic} onChange={this.handlerTopicChange}>
//                         <option value='react'>React</option>
//                         <option value='angular'>Angular</option>
//                         <option value='javascript'>Javascript</option>
//                     </select>
//                 </div>
//             </form>
//         )
//     }
// }

// export default Form