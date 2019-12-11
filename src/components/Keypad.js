import React from 'react'
// import { type } from 'os'

// Code Keypad Component Here

class Keypad extends React.Component {
    // state ={
    //     password: ""
    // }
    
    passwordInfo= () => {
        console.log("Entering password...");
        
    }
    render(){
       return ( <label> password
           <input onKeyUp= {this.passwordInfo} type= "password" name= "password"/>
           </label>)
           {console.log(this.props);
           }
    }
}
export default Keypad;