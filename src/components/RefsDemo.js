import React, { Component } from "react";



class RefsDemo extends Component{

    constructor(){
        super()

        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = event => {
            this.cbRef = event
        }
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        
        // this.inputRef.current.focus()
        // console.log(this.inputRef);
    }

    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }

    render(){
        return(
            <div>
                <input type='text' ref={this.inputRef}></input>
                <input type='text' ref={this.setCbRef}></input>
                <button onClick={this.clickHandler}>Submit</button>
            </div>
        )
    }
}


export default RefsDemo























// import React, { Component } from "react";


// class RefsDemo extends Component{
//     constructor(){
//         super()

//         this.inputRef = React.createRef()
//     }

//     componentDidMount(){
//         this.inputRef.current.focus()
//         console.log(this.inputRef);
//     }

//     render(){
//         return(
//             <div>
//                 <input type='text' ref={this.inputRef}></input>
//             </div>
//         )
//     }
// }

// export default RefsDemo