import React, { Component } from "react";
import withComponent from "./withComponent";


class ClickCounter extends Component {

    render() {
        const { count, incrementCounter } = this.props
        return (
            <button onClick={incrementCounter}>{this.props.name} Clicked {count} times</button>
        )
    }
}

export default withComponent(ClickCounter, 1)



































// import React, { Component } from "react";

// class ClickCounter extends Component{

//     constructor(props){
//         super(props)

//         this.state = {
//             count: 0
//         }
//     }

//     incrementCounter = () => {
//         this.setState((prevState) => {
//             return{
//                 count: prevState.count + 1
//             }
//         })
//     }

//     render(){
//         const {count} = this.state
//         return(
//             <button onClick={this.incrementCounter}>Clicked {count} times</button>
//         )
//     }
// }


// export default ClickCounter