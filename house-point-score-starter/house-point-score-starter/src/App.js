import React, { Component } from 'react';
import './App.css';
import House from "./components/House"

class App extends Component {
  constructor(){
    super()
    this.state ={
      gryffindor: 0,
      slytherin: 0,
      hufflepuff: 0,
      ravenclaw: 0
    }

    // this.pointGryffindor = this.pointGryffindor.bind(this)
  }

  pointGryffindor = (num) => {
    this.setState({
      gryffindor: this.state.gryffindor + num
    })
  }

  pointHufflepuff = (num) => {
    this.setState({
      hufflepuff: this.state.hufflepuff + num
    })
  }

  pointRavenclaw = (num) => {
    this.setState({
      ravenclaw: this.state.ravenclaw + num
    })
  }

  pointSlytherin = (num) => {
    this.setState({
      slytherin: this.state.slytherin + num
    })
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: "#891a04", color: "white", height: "100vh", paddingTop: "50px"}}>
        <h1 style={{fontSize: "50px"}}>Hogwarts House Scores</h1>
        <div className="houses">
          <div className="house">
            <House houseName="Gryffindor" pointHouse={this.pointGryffindor}/>
            <h2>Points: {this.state.gryffindor}</h2>
          </div>

          <div className="house">
            <House houseName="Hufflepuff" pointHouse={this.pointHufflepuff}/>
            <h2>Points: {this.state.hufflepuff}</h2>
          </div>

          <div className="house">
            <House houseName="Ravenclaw" pointHouse={this.pointRavenclaw} />
            <h2>Points: {this.state.ravenclaw}</h2>
          </div>

          <div className="house">
            <House houseName="Slytherin" pointHouse={this.pointSlytherin} />
            <h2>Points: {this.state.slytherin}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
