import React, {Component} from 'react'

class House extends Component {
    render(){
        return (
            <div>
                <h2>{this.props.house}</h2>
                <button onClick={() => this.props.addPoints(10)}>10 Points</button>
                <button onClick={() => this.props.addPoints(20)}>20 Points</button>
                <button onClick={() => this.props.addPoints(50)}>50 points</button>
            </div>
            
        )
    }
}

export default House