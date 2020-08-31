import React, { Component } from "react";

class Keypad extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div className="keypad">
        <div className="row">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("=")}>=</button>
          <button onClick={() => handleClick("C")}>C</button>
          <button onClick={() => handleClick("CE")}>CE</button>
        </div>
      </div>
    );
  }
}

export default Keypad;
