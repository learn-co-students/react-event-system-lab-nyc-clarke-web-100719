// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    isFocused = () => {
        console.log("Good!")
    }
    isBlurred = () => {
        console.log("Hey! Eyes on me!")
    }

    render(){
        return <button onFocus={this.isFocused} onBlur={this.isBlurred}></button>
    }

}
