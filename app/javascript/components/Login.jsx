import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
      errors: '',
      user: []
     };
  }

handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit = (event) => {
    event.preventDefault()
    const url = `/api/v1/user/index`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("No such user");
      })
      .then(response => {
          this.setState({ user: response })
          response.users.map(element => {
              console.log(element)
            if (element.username == this.state.username){
              if (element.password == this.state.password)
              {
                  this.props.history.push("/recipes")
              }
            }
        });
        })  
  };

render() {
    const {username, password} = this.state
return (
      <div>
        <h1>Log In</h1>
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
         <button placeholder="submit" type="submit">
            Log In
          </button>

          <div>
             <Link to='/register'>Sign Up</Link>
          </div>

          <div>
             <Link to='/'>Main Page</Link>
          </div>
          
         </form>
      </div>
    );
  }
}
export default Login;