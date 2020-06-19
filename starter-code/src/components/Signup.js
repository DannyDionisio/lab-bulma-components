import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

class Signup extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <FormField label="Name" type="text" placeholder="Your name" />
        <FormField label="Email" type="email" placeholder="Your email" />
        <FormField
          label="Password"
          type="password"
          placeholder="Type your Password"
        />
        <CoolButton isSmall isSuccess className="is-rounded my-class">
          Submit
        </CoolButton>
      </Fragment>
    );
  }
}

export default Signup;
