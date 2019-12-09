// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

    passwordMessage = () => {
        console.log("Entering password...")
    }

    render() {
        return <form>
            <input type="password"  onKeyUp={this.passwordMessage} />
        </form>
    }
}