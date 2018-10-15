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
          <House addPoints={this.pointGryffindor} house="Gryffindor" points={this.state.gryffindor}/>
          <House addPoints={this.pointHufflepuff} house="Hufflepuff" points={this.state.hufflepuff}/>
          <House addPoints={this.pointRavenclaw} house="Ravenclaw" points={this.state.ravenclaw}/>
          <House addPoints={this.pointSlytherin} house="Slytherin" points={this.state.slytherin}/>
        </div>
      </div>
    );
  }
}

export default App;
