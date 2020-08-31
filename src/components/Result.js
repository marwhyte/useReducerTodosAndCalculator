import React, { Component } from "react";

class Result extends Component {
  render() {
    let { result } = this.props;
    return (
      <div
        style={{
          width: "100%",
          marginTop: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            backgroundColor: "black",
            color: "whitesmoke",
            width: 100,
            padding: 20,
            textAlign: "center",
          }}
        >
          {result}
        </p>
      </div>
    );
  }
}

export default Result;
