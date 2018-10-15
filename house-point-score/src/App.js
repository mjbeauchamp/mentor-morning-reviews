import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import House from "./components/House"

class App extends Component {
  constructor(){
    super()
    this.state = {
      gryffindor: 0,
      hufflepuff: 0,
      ravenclaw: 0,
      slytherin: 0
    }
  }

  pointGryffindor = (num) => {
    this.setState({
      gryffindor: this.state.gryffindor += num
    })
  }

  pointHufflepuff = (num) => {
    this.setState({
      hufflepuff: this.state.hufflepuff += num
    })
  }

  pointRavenclaw = (num) => {
    this.setState({
      ravenclaw: this.state.ravenclaw += num
    })
  }

  pointSlytherin = (num) => {
    this.setState({
      slytherin: this.state.slytherin += num
    })
  }

  render() {
    return (
      <div className="App">
        <h1>House Scores</h1>
        <div className="houses">
          <div className="house">
            <House addPoints={this.pointGryffindor} house="Gryffindor" />
            <h2>Points: {this.state.gryffindor}</h2>
          </div>

          <div className="house">
            <House addPoints={this.pointHufflepuff} house="Hufflepuff" />
            <h2>Points: {this.state.hufflepuff}</h2>
          </div>

          <div className="house">
            <House addPoints={this.pointRavenclaw} house="Ravenclaw" />
            <h2>Points: {this.state.ravenclaw}</h2>
          </div>

          <div className="house">
            <House addPoints={this.pointSlytherin} house="Slytherin" />
            <h2>Points: {this.state.slytherin}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
