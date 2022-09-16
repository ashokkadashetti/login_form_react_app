import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState(prevState => ({
            count: prevState.count + 1
        }), () => {
            console.log(this.state.count);
        })
    }

    incrementFive(){
       this.increment()
       this.increment()
       this.increment()
       this.increment()
       this.increment()
    }



  render() {
    return (
      <div>
          <h1>Counter = {this.state.count}</h1>
          <button onClick={() => this.increment()}>Increment</button><br></br><br></br>
          <button onClick={() => this.incrementFive()}>Increment 5</button><br></br><br></br>
      </div>
    );
  }
}

export default Counter;
