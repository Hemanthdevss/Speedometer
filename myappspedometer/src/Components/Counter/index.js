import { Component } from "react";
import "./index.css"

class Counter extends Component {
    state = {count : 0}
    onIncrement = () => {

        if (this.state.count < 200) {
            this.setState((prevState) => (
                {count:prevState.count +10}
            ))
        }
    }

    onDecrement = () => {

        if (this.state.count > 0 ){
            this.setState((prevState) => (
                {count:prevState.count -10}
            ))
        }
        
    }

    render() {
        const {count} = this.state
        return (
            <div className="container">
                <h1 className="count"> SPEDOMETER </h1>
                <img src = "https://assets.ccbp.in/frontend/react-js/speedometer-img.png" className="imageStyle" alt="meter"/>
                <p> Speed is {count}mph </p>
                <p> Min Limit is 0mph, Max Limit is 200mph </p>
                <div className="buttonContainer">
                    <button className="button" onClick={this.onIncrement}> Accelerate </button>
                    <button className="button" onClick={this.onDecrement}> Apply Break </button>
                </div>
                

            </div>
        )
    }
}

export default Counter