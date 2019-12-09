// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    blurMessage = () => {
        console.log("Hey! Eyes on me!")
    }

    focusMessage = () => {
        console.log("Good!")
    }

    render() {
        return <button onBlur={this.blurMessage} onFocus={this.focusMessage}>
            Button
        </button>
    }
}