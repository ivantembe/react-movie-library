import React from "react";
import Form from "./Form";
import Joi from "joi-browser";

class RegistrationForm extends Form {
  state = {
    data: { name: "", email: "", password: "" },
    errors: {},
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    email: Joi.string()
      .email()
      .required()
      .label("Email address"),
    password: Joi.string()
      .required()
      .label("Password"),
  };

  doSubmit = () => {
    // Call Server
    console.log("Sign up submited to the server!");
  };

  render() {
    return (
      <div className="w-50 my-0 mx-auto">
        <h2 className="mb-4">Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name", "text", true)}
          {this.renderInput("email", "Email Address")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
