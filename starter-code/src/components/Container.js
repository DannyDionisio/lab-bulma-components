import React, { Component } from "react";
import Message from "./Message";

class Container extends Component {
  render() {
    return (
      <div className="container">
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </div>
    );
  }
}

export default Container;
