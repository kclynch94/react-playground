import React from 'react';

class HelloWorld extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            who: 'world'
        }
    }

    handleFriendButtonClick = () => {
        this.setState ({
            who: 'friend'
        })
    }

    handleWorldButtonClick = () => {
        this.setState ({
            who: 'world'
        })
    }

    handleReactButtonClick = () => {
        this.setState ({
            who: 'react'
        })
    }

    render () {
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={this.handleWorldButtonClick}>
                    World
                </button>
                <button onClick={this.handleFriendButtonClick}>
                    Friend
                </button>
                <button onClick={this.handleReactButtonClick}>
                    React
                </button>
            </div>
        )
    }
}

export default HelloWorld;