import { Component } from 'react';

class Timer extends Component {
    state = {
        seconds: 0,
    };

    i = {}

    componentWillUnmount = () => {
        clearInterval(this.i)
    }

    componentDidMount = () => {
        this.i = setInterval(() => this.setState({ seconds: this.state.seconds + 1 }), 1000);
    };

    render() {
        return (
            <div>
                <h1> Timer App </h1>
                <div> Seconds Elapsed: {this.state.seconds} </div>
            </div>
        );
    }
}

export default Timer;