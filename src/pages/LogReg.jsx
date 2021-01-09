import React, { Component } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import "../styles/style.css";

export default class LogReg extends Component {
  state = {
    loginBtn: false,
  };
  change = (e) => {
    this.setState({ logininBtn: true });
  };
  render() {
    return (
      <div className="container">
        <div className="forms-container">
          {this.props.loginBtn ? <SignUp /> : <Login />}
        </div>
      </div>
    );
  }
}
