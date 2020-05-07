import React from "react";
import Form from "./Form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
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
    console.log("Login submited to the server!");
  };

  render() {
    return (
      <div className="w-50 my-0 mx-auto">
        <h2 className="mb-4">Login</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email Address", "text", true)}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
