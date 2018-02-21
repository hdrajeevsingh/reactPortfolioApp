import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
var apiBaseUrl = "http://18.219.201.43:8082/";


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phoneNo: '',
      password: '',
      userCreated: false,
      signupMessage:''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // var self = this;
    var payload = {
      "firstName": this.state.firstname,
      "lastName": this.state.lastname,
      "email": this.state.email,
      "phoneNumber": this.state.phoneNo,
      "password": this.state.password
    }
    let that = this;
    console.log(apiBaseUrl);
    axios.post(apiBaseUrl + 'user/signup', payload)
      .then(function (response) {
        console.log('signup', response);
        that.setState({
          userCreated: response.data.userCreated,
          signupMessage:response.data.message
        });
        //    if(response.data.code == 201){
        console.log("User Created Successfully");


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
    if (this.state.userCreated) {
      return (
        <Redirect to="/login.htm" />
      );
    }

    return (
      <div>
        <Header/>
        <div className="signup_section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 col-md-offset-3">
                <div className="sg_section">
                  <h1>Sign up</h1>
                  <div className="input-group ">
                    <input type="text" className="form-control" placeholder="First Name" onChange={(event) => this.setState({ firstname: event.target.value })} />
                    <div className="input-group-addon"><i className="fa fa-user"></i></div>
                  </div>
                  <div className="input-group ">
                    <input type="text" className="form-control" required placeholder="Last Name" onChange={(event) => this.setState({ lastname: event.target.value })} />
                    <div className="input-group-addon"><i className="fa fa-user"></i></div>
                  </div>
                  <div className="input-group ">
                    <input type="email" required className="form-control" placeholder="Email" onChange={(event) => this.setState({ email: event.target.value })} />
                    <div className="input-group-addon"><i className="fa fa-envelope-open"></i></div>
                  </div>
                  <div className="input-group ">
                    <input type="text" required className="form-control" placeholder="Phone No." onChange={(event) => this.setState({ phoneNo: event.target.value })} />
                    <div className="input-group-addon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                  </div>
                  <div className="input-group ">
                    <input type="password" required className="form-control" placeholder="Password" onChange={(event) => this.setState({ password: event.target.value })} />
                    <div className="input-group-addon"><i className="fa fa-lock" aria-hidden="true"></i></div>
                  </div>
                  <div className="input-group">
                    <input type="password" required className="form-control" placeholder="Confirm Password" />
                    <div className="input-group-addon"><i className="fa fa-lock" aria-hidden="true"></i></div>
                  </div>
                </div>
                <div className="signup-message">{this.state.signupMessage}</div>
                <div className="signup_btn">
                  <input name="" value="Create Account" type="submit" onClick={this.handleClick} />
                  <h6>Already a member? <a href="login.htm">Login Now.</a></h6>
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

export default Signup;