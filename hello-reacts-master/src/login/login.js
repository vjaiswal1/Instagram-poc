import React, { Component } from 'react';
import FormErrors from "../formError/FormErrors";
import Validate from "../formError/FormValidation";
import section  from "../login/login.css";
import {Auth} from 'aws-amplify';
import { Redirect } from "react-router-dom"
import UserContext from "../lib/contextLib";


class LogIn extends Component {
  static contextType = UserContext
  constructor(props,context) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {
        cognito: null,
        blankfield: false
      }
      };
  }
 
  componentDidMount(prevProps,prevState,prevContext) {
 
  }
   
  
  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    let { isAuthenticated,user, setAuthenticated,setUser } = this.context
    console.log("before login:"+isAuthenticated);
    console.log("before login username:"+user);
  
    // AWS Cognito integration here
    try{
      const userData = await Auth.signIn(this.state.username,this.state.password);
      console.log("aws user"+JSON.stringify(userData.username))

       isAuthenticated=true;
      setAuthenticated(isAuthenticated);
      setUser(userData.username);

      console.log("after login:"+isAuthenticated);
      console.log("after login username:"+user);
      
      this.props.router.push('/post')
    }
    catch(error){
      let err=null;
      !error.message? err={"message":err}:err=error ;

      this.setState({
        errors:{
          ...this.state.errors,
          cognito:err
        }
      });

    }

  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {

    return (
      <section className="section auth">
        <div className="container">
          <h1>Log in</h1>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input 
                  className="input" 
                  type="text"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter username or email"
                  value={this.state.username}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input 
                  className="input" 
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <a href="/forgotpassword">Forgot password?</a>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default LogIn;