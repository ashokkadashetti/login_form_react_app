import React from "react";


const withComponent = (WrappedComponent) => {
    class WithComponent extends React.Component{
        constructor(props){
            super(props)

            this.state = { 
                count: 0
            }
        }

        incrementCounter = () => {
            this.setState((prevState) => {
                return{count: prevState.count + 1}
            })
        }

        render(){
            return(
               <WrappedComponent count={this.state.count} incrementCounter={this.incrementCounter}/>
            )
        }
    }
    return WithComponent
}
export default withComponent

































// import React from "react";

// const withComponent = ( WrappedComponent, incrementNumber ) => {
//     class WithComponent extends React.Component {

//         constructor(props) {
//             super(props)

//             this.state = {
//                 count: 0
//             }
//         }
//         incrementCounter = () => {
//             this.setState((prevState) => {
//                 return {
//                     count: prevState.count + incrementNumber
//                 }
//             })
//         }

//         render() {
//             return (
//                 <WrappedComponent count={this.state.count}
//                     incrementCounter={this.incrementCounter}
//                     {...this.props}/>
//             )
//         }
//     }
//     return WithComponent
// }


// export default withComponent