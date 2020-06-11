import React, { Component } from "react";
import MainContainer from "../Style/MainContainer";
import "./ManagerProfile.css";
import jQuery from "jquery";
import Axios from "axios";

class ManagerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantName: "",
      firstname: "",
      lastname: "",
      userName: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      //value: e.target.value
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // alert('A name was submitted: ' + this.state.value);
    console.log(this.state);
  };

  componentDidMount() {
    var str = "";
    Axios.get("http://localhost:3001/ex").then((res) => {
      console.log(res);
      str = res.data.answer;
      jQuery("#fromserver").text(str);
    });
  }

  render() {
    return (
      <MainContainer>
        <div>
          <p id="fromserver"></p>
        </div>
        <div class="container">
          <div class="page-header">
            <h1>Profile</h1>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="restaruantName">
              Restaurant Name:
              <input
                type="text"
                id="restaurantName"
                className="form-control"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="firstname">
              First Name:
              <input
                type="text"
                id="firstname"
                className="form-control"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="lastname">
              Last Name:
              <input
                type="text"
                id="lastname"
                className="form-control"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password:
              <input
                type="text"
                id="password"
                className="form-control"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-primary">Delete</button>
        </form>
      </MainContainer>
    );
  }
}

export default ManagerProfile;
