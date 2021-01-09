import React, { Component } from "react";
import Cookies from "js-cookie";
import Dashboard from "../pages/Dashboard";
import SignUp from "./SignUp";

import { FaUserAlt, FaLock } from "react-icons/fa";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false,
      Error: "",
      email: "",
      password: "",
      token: "",
      signUpBtn: false,
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

  login = (event) => {
    event.preventDefault();
    var formData = new FormData(event.target);

    var formObject = {};
    formData.forEach(function (value, key) {
      formObject[key] = value;
    });

    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + Cookies.get("jwt"));

    fetch("https://shaaggy.herokuapp.com/login", {
      method: "POST", // or 'PUT'
      headers: {
        myHeaders,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.status);
        if (data.status === "Check Credentials Before Logging Again") {
          this.setState({ Error: data.status });
          this.setState({ loggedin: false });
          return;
        } else if (data.status === "User does not exists") {
          this.setState({ Error: data.status });
          this.setState({ loggedin: false });
          return;
        } else {
          this.setState({
            Error: data.status,
            loggedin: true,
            token: data.data.jwt,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  logout = (event) => {
    Cookies.remove("jwt");
    this.setState({ loggedin: false });
  };
  change = (event) => {
    this.setState({ signUpBtn: true });
  };
  alter = (event) => {
    this.setState({ signUpBtn: false });
  };
  render() {
    return (
      <div>
        {this.state.signUpBtn ? (
          <SignUp changes={this.alter} />
        ) : (
          <>
            <div>
              {this.state.loggedin ? (
                <Dashboard logout={this.logout} user={this.state.email} />
              ) : (
                <>
                  <div className="panels-container">
                    <div class="panel left-panel">
                      <div class="content">
                        <h3>New here ?</h3>
                        <button
                          onClick={this.change}
                          class="btn transparent"
                          id="sign-up-btn"
                        >
                          Sign up
                        </button>
                      </div>
                      <img src="img/log.svg" class="image" alt="" />
                    </div>
                  </div>
                  <p>{this.state.Error}</p>

                  <div className="signin-signup">
                    <form
                      method="POST"
                      name="login"
                      onSubmit={this.login}
                      class="sign-in-form"
                    >
                      <h2 className="title">Sign in</h2>
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
                      <input
                        type="submit"
                        value="Login"
                        className="btn solid"
                      />
                    </form>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
}
