import React, { Component } from "react";
import "./App.css"

export default class Calculator extends Component {
  state = {
    n1: "",
    n2: "",
    res: ""
  }
  
  handleChange1 = (e) => {
    this.setState({
      n1: Number(e.target.value)
    })
  }

  handleChange2 = (e) => {
    this.setState({
      n2: Number(e.target.value)
    })
  }

  div = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
    this.setState({
      res: n1 / n2
    })
   } else {
     this.setState({
      res: "undefined value"
     })
   }
  }


  mult = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
    this.setState({
      res: n1 * n2
    })
   } else {
     this.setState({
      res: "undefined value"
     })
   }
  }


  sub = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
    this.setState({
      res: n1 - n2
    })
   } else {
     this.setState({
      res: "undefined value"
     })
   }
  }


  soma = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
    this.setState({
      res: n1 + n2
    })
   } else {
     this.setState({
      res: "undefined value"
     })
   }
  }
  
  clear = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: null,
        n1: 0,
        n2: 0
      });
    } else {
      this.setState({
        res: "undefined value."
      })
    }
  }

  render() {
    return (
      <div className="container">
      <div className="titles">
        <h1>Calc App</h1>
        <h2>Result: {this.state.res}</h2>
      </div>
      <div className="container-inputs">
        <input value={this.state.n1} type="number" onChange={this.handleChange1} />
        <input value={this.state.n2} type="number" onChange={this.handleChange2} />
        <button className="buttons" onClick={this.div}>/</button>
        <button className="buttons" onClick={this.mult}>*</button>
        <button className="buttons" onClick={this.sub}>-</button>
        <button className="buttons" onClick={this.soma}>+</button>
        <button className="buttons" onClick={this.clear}>Clear</button>
      </div>
      </div>
    );
  }
 }
