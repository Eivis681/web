import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: "",
      password: "",
      password_confirmation: "",
      errors: ''
     };

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  };

handleSubmit(event) {
    event.preventDefault();
    const url = "api/v1/user/create";
    const {username, password} = this.state
    const body = {
        username,
        password
    };
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
        method: "POST",
        headers: {
            "X-CSRF-Token": token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
    })
    .then(response => {
        if (response){
            return response.json();
        }
        throw new Error("Negerai");
    })
    .then(response => this.props.hystory.push(`/user/${response.id}`))
  };

render() {
    const {username, password, password_confirmation} = this.state
return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            required
            onChange={this.handleChange}
          />
          <input 
            placeholder="password"
            type="password"
            name="password"
            value={password}
            required
            onChange={this.handleChange}
          />
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            required
            onChange={this.handleChange}
          />
        
          <button placeholder="submit" type="submit">
            Sign Up
          </button>

          <div>
             <Link to='/login'>Login</Link>
          </div>

          <div>
             <Link to='/'>Main Page</Link>
          </div>
      
        </form>
      </div>
    );
  }
}
export default Register;