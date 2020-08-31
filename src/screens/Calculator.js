import React, { Component } from "react";
import Keypad from "../components/Keypad";
import Result from "../components/Result";
import { Link } from "react-router-dom";
class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (value) => {
    if (value === "C") {
      if (this.state.result === "ERROR") {
        this.reset();
      } else {
        this.backSpace();
      }
    } else if (value === "CE") {
      this.reset();
    } else if (value === "=") {
      this.calculate();
    } else {
      this.setState({ result: this.state.result + value });
    }
  };
  backSpace = () => {
    this.setState({ result: this.state.result.slice(0, -1) });
  };
  reset = () => {
    this.setState({ result: "" });
  };
  calculate = () => {
    let value = this.state.result;
    if (value.includes("--")) {
      value = value.replace("--", "+");
    }
    try {
      // eslint-disable-next-line no-eval
      this.setState({ result: (eval(value) || "") + "" });
    } catch {
      this.setState({
        result: "ERROR",
      });
    }
  };
  render() {
    return (
      <div>
        <h1>Calculator App</h1>
        <Keypad handleClick={this.handleClick} />
        <Result result={this.state.result} clear={this.state.clear} />
        <Link to="/">Back to Todos</Link>
      </div>
    );
  }
}

export default Calculator;
