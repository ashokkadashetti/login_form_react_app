import React, { Component } from "react";

const Validation = (props) => {
    const {uname, pwd} = props
    const arr = [{id: 1, uname:'Ashok', pwd:'12345'},{id:2, uname:'Kiran', pwd:'123123'},{id:3, uname:'Sagar', pwd:'121212'}]
    return(
        <div>
            {
                arr.map(data => {
                    if(data.uname === uname && data.pwd === pwd){
                        alert('Authorised..')
                    }
                    // else{
                    //     alert('Unauthorised..')
                    // }
                })
            }
        </div>
    )
}

export default Validation