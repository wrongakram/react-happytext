import React, { Component } from "react";
import { Happy } from "react-happytext";

class App extends Component {
  render() {
    return (
      <>
        <span
          style={{
            fontSize: "200px",
            fontWeight: "700",
            fontFamily: "Avenir",
            letterSpacing: "-0.4rem",
            display: "block"
          }}
        >
          <Happy value="HappyText" />
        </span>
      </>
    );
  }
}

export default App;
