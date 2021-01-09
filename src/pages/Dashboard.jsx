import React, { Component } from "react";
import "../styles/style.css";

import image from "../images/dashboard.jpg";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="dashboard">
          <div className="content">
            <h3> Welcome</h3>
            <img src={image} alt="dashboard" width="500px" />
          </div>
        </div>
        <div className="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>Dashboard</h3>
              <p>Logged in as {this.props.user}</p>
              <button
                onClick={this.props.logout}
                class="btn transparent"
                id="sign-up-btn"
              >
                logout
              </button>
            </div>
            <img src="img/log.svg" class="image" alt="" />
          </div>
        </div>
      </>
    );
  }
}
