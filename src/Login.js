import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {FacebookLoginButton} from 'react-social-login-buttons';
import userConfig from './config';
var apiBaseUrl = "http://18.219.201.43:8082/";
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: userConfig['LOGGED_IN'],
            loggedInMessage:'',
            firstName:'',
            userName:'raghu@freakydeveloper.com',
            password: '123',
            userData:{}
        };
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(event) {
        // var self = this;
        var payload = {
          "email": this.state.userName,
          "password": this.state.password
        }
        let that = this;
        console.log(apiBaseUrl);
        axios.post(apiBaseUrl + 'user/login', payload)
          .then(function (response) {
            console.log('logged in', response);
            userConfig['ID'] = response.data.user._id;
            userConfig['LOGGED_IN'] = response.data.loggedIn;
            sessionStorage.setItem("ID", response.data.user._id);  
            sessionStorage.setItem("LOGGED_IN", response.data.loggedIn);
            that.setState({
              loggedIn: response.data.loggedIn,
              loggedInMessage:response.data.message,
              firstName:response.data.firstName,
              userData: response.data.user
            });
              
    
            //    var uploadScreen=[];
            //    uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
            //    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
            //     }
    
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    

    render() {
        if (this.state.loggedIn) {
            return (
              <Redirect to={{
                pathname: '/my-account.htm',
                state: { userData: this.state.userData }
              }} />
            );
          }


      return (
                <div>
                    <Header/>
                    <div className="signup_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12 ">
                                    <div className="login_section">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h1>Login into Your Account</h1>
                                                <div className="input-group ">
                                                    <input type="text" className="form-control" placeholder="User Name" onChange={(event) => this.setState({ userName: event.target.value })} />
                                                    <div className="input-group-addon">
                                                        <i className="fa fa-user"></i>
                                                    </div>
                                                </div>
                                                <div className="input-group ">
                                                    <input type="password" className="form-control" placeholder="Password" onChange={(event) => this.setState({ password: event.target.value })} />
                                                    <div className="input-group-addon">
                                                        <i className="fa fa-lock"></i>
                                                    </div>
                                                </div>
                                                <div className="login-message">{this.state.loggedInMessage}</div>
                                                <div className="login_btn">
                                                    <input name="" value="Sign In" type="submit" onClick={this.handleClick} />
                                                </div>
                                                <div className="rembr_sec ">
                                                    <input name="" type="checkbox" value="" />
                                                    <h6>Remember Me</h6>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <a href="signup.htm">Create Account</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Forgot Password ?</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-5 col-md-offset-1">
                                                <div className="social_login">
                                                    <ul>
                                                        <li>
                                                            <a href="#" className="login_fb">
                                                                <i className="fa fa-facebook" aria-hidden="true"></i>Sign in with facebook</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="login_linkd">
                                                                <i className="fa fa-linkedin" aria-hidden="true"></i>Sign in with linkedin</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="login_googl">
                                                                <i className="fa fa-google-plus" aria-hidden="true"></i>Sign in with Google</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
      );
    }
  }

  export default Login;