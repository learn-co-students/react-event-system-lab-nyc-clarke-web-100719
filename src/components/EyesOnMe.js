// Code EyesOnMe Component Here
import React from 'react'

// Code EyesOnMe Component Here

class EyesOnMe extends React.Component {

    focusFunc= () =>{
        console.log('Good!');
    }
    blurFunc =() => {
        console.log("Hey! Eyes on me!");
        
    }
    render(){
        return <button onFocus={this.focusFunc} onBlur ={this.blurFunc}> click </button>
        
    }
}
export default EyesOnMe;