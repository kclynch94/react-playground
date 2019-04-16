import React from 'react';

class Bomb extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const newCount = this.state.count + 1
            this.setState({
                count: newCount
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    handleDisplay = () => {
        const count = this.state.count;
        if (count >= 8) {
            clearInterval(this.interval)
            return 'BOOMba!!!'
        } else if (count % 2 === 0){
            return 'tick'
        } else {
            return 'tock'
        }
    }

    render() {
        return (
            <div>
                <p>{this.handleDisplay()}</p>
            </div>
        )
    }
}

export default Bomb;