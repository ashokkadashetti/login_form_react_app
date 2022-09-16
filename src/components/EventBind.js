import React, { Component } from 'react';

class EventBind extends Component {
    constructor(){
        super()

        this.state = {
            message: "Hello"
        }

        // this.eventHandler = this.eventHandler.bind(this)
    }
    // eventHandler(){
    //     this.setState({
    //         message: 'Good bye'
    //     })
    // }

    eventHandler = () => {
        this.setState({
            message: 'Good bye'
        })
    }

  render() {
    return (
      <div>
          <div>{this.state.message}</div>
        {/* <button onClick={this.eventHandler.bind(this)}>Click me..!!</button> */}
        {/* <button onClick={() => this.eventHandler()}>Click me..!!</button> */}
        <button onClick={this.eventHandler}>Click me..!!</button>
      </div>
    );
  }
}

export default EventBind;
