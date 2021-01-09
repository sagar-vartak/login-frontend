import React, { Component } from "react";
import Login from "./Login";
//import { signup } from "../apiCall/api";
import "../styles/style.css";

import { FaUserAlt, FaLock } from "react-icons/fa";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signBtn: false,
      loggedin: false,
      Error: "",
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidUpdate = (event) => {
    setInterval(() => {
      this.setState({ Error: "" });
    }, 8000);
    clearInterval();
  };

  signup = (event) => {
    event.preventDefault();
    var formData = new FormData(event.target);

    var formObject = {};
    formData.forEach(function (value, key) {
      formObject[key] = value;
    });

    fetch("https://shaaggy.herokuapp.com/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === "USER ALREADY EXISTS") {
          this.setState({ Error: data.status });
          return;
        } else {
          this.setState({ Error: data.status, signBtn: true });
          alert("User added Sucessfullt. Please Sign in To Continue");
          this.setState({ loggedin: true });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div>
        {this.state.loggedin ? (
          <Login />
        ) : (
          <>
            <div className="panels-container">
              <div className="panel left-panel">
                <div className="content">
                  <h3>One of us ?</h3>
                  <button
                    onClick={this.props.changes}
                    className="btn transparent"
                    id="sign-up-btn"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>

            <p>{this.state.Error}</p>

            <div className="signin-signup">
              <form
                method="POST"
                name="login"
                className="sign-in-form"
                onSubmit={this.signup}
              >
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                  <i>
                    <FaUserAlt color="#333" />
                  </i>
                  <input
                    type="text"
                    name="email"
                    placeholder="EMAIL"
                    value={this.email}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <i>
                    <FaLock color="#333" />
                  </i>
                  <input
                    type="password"
                    name="password"
                    placeholder="PASSWORD"
                    value={this.password}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <input type="submit" className="btn" value="Sign up" />
              </form>
            </div>
          </>
        )}
      </div>
    );
  }
}
