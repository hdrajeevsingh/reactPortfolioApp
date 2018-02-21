import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import userConfig from './config';
import { Redirect } from 'react-router-dom';
var apiBaseUrl = "http://18.219.201.43:8082/";

class Account extends React.Component{
    constructor(props) {
        super(props);
        //const userData = this.props.location.state ? this.props.location.state.userData:{};
        // this.state = {
        //     firstName: userData.firstName || '',
        //     lastName: userData.lastName || '',
        //     phoneNumber: userData.phoneNumber || '',
        //   addressOne: userData.addressOne || '',
        //   addressTwo: userData.addressTwo || '',
        //   email: userData.email || '',
        //   state: userData.state || '',
        //   country: userData.country || '',
        //   zip: userData.zip || '',
        //   about:userData.about || '',
        //   uploadImage:userData.uploadImage || '',
        //   imagePreviewUrl:userData.imageUrl || ''
        // };
        this.state = {
            firstName: '',
            lastName:  '',
            phoneNumber:  '',
          addressOne:  '',
          addressTwo: '',
          email:  '',
          state: '',
          country:  '',
          zip: '',
          about: '',
          uploadImage: '',
          imagePreviewUrl: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        console.log('====================================');
        console.log('config',userConfig);
        console.log('====================================');
      }
      
    handleImageChange(e) {
            e.preventDefault();

            let reader = new FileReader();
            let file = e.target.files[0];
            reader.readAsDataURL(file)
            reader.onloadend = () => {

                console.log('freee',file)
            this.setState({
                uploadImage: file,
                imagePreviewUrl: reader.result
            });
            }

            
  }
    handleClick(event) {
        // var self = this;
        let data = new FormData();
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        data.append( "addressOne",this.state.addressOne)
        data.append( "addressTwo",this.state.addressOne)
        data.append( "city",this.state.addressOne)
        data.append( "state",this.state.addressOne)
        data.append( "country",this.state.addressOne)
        data.append( "zip",this.state.addressOne)
        data.append( "about",this.state.about)
        data.append( "userImage",this.state.uploadImage)
        // var payload = {
        //   "addressOne": this.state.addressOne,
        //   "addressTwo": this.state.addressTwo,
        //   "city": this.state.city,
        //   "state": this.state.state,
        //   "country": this.state.country,
        //   "zip": this.state.zip,
        //   "about": this.state.about,
        //   "userImage":this.state.uploadImage
        // }
        // for(var key in payload){
        //     data.append(key, payload)
        // }
        console.log('upload image',this.state.uploadImage)
        let that = this;
        console.log(apiBaseUrl+ 'user/accountUpdate/'+this.props.location.state.userData._id);
        axios.post(apiBaseUrl + 'user/accountUpdate/'+this.props.location.state.userData._id, data,config)
          .then(function (response) {
            console.log('signup', response);
            // that.setState({
            //   userCreated: response.data.userCreated,
            //   signupMessage:response.data.message
            // });
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
    
    render(){
        if(!sessionStorage.getItem("LOGGED_IN")){       
            return (
              <Redirect to={{
                pathname: '/login.htm'               
              }} />
            );           
       }
        
        
        return(
                <div id="wrapper">
                <Sidebar/>
                    <div id="page-content-wrapper">
                        <div className="content-header">
                            <div className="row">
                                <div className="col-md-1">
                                    <h1>
                                        <a id="menu-toggle" href="#" className="btn btn-default">
                                            <i className="fa fa-bars" aria-hidden="true"></i>
                                        </a>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="page-content inset">
                            <div className="myacunt_section">
                                <div className="row">
                                    <div className="col-md-8 col-md-offset-2">
                                        <div className="acunt_form">
                                            <h1>My Account</h1>
                                            <form>
                                                <div className="form-group uplod_img">
                                                    <img src={this.state.imagePreviewUrl} />
                                                    <input type="file" name="pic" accept="image/*" onChange={(e)=>this.handleImageChange(e)}/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="First Name" value={ this.state.firstName } onChange={(event) => this.setState({ firstName: event.target.value })}/>
                                                    <input type="text" className="form-control" placeholder="Last Name" value={ this.state.lastName } onChange={(event) => this.setState({ lastName: event.target.value })}/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Enter your Email" value={ this.state.email } onChange={(event) => this.setState({ email: event.target.value })}/>
                                                    <input type="text" className="form-control" placeholder="Mobile No." value={ this.state.phoneNumber } onChange={(event) => this.setState({ phoneNumber: event.target.value })}/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Address Line 1" value={ this.state.addressOne } onChange={(event) => this.setState({ addressOne: event.target.value })}/>
                                                    <input type="text" className="form-control" placeholder="Address Line 2" value={ this.state.addressTwo } onChange={(event) => this.setState({ addressTwo: event.target.value })}/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="City" value={ this.state.city } onChange={(event) => this.setState({ city: event.target.value })}/>
                                                    <input type="text" className="form-control" placeholder="State" onChange={(event) => this.setState({ state: event.target.value })}/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="controls">
                                                        <select id="country" name="country" className=" input-xlarge" value={ this.state.country } onChange={(event) => this.setState({ country: event.target.value })}>
                                                            <option value="" defaultValue>(please select a country)</option>
                                                            <option value="AF">India</option>
                                                            <option value="AL">United States</option>
                                                            <option value="DZ">Norway</option>
                                                            <option value="AS">France</option>
                                                        </select>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Zip" value={ this.state.zip } onChange={(event) => this.setState({ zip: event.target.value })}/>
                                                </div>
                                                <div className="form-group">
                                                    <textarea className="form-control" rows="5" placeholder="About Me" value={ this.state.about } onChange={(event) => this.setState({ about: event.target.value })}></textarea>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="schdl_btn">
                                            <button type="submit" className="schdl_cret" onClick={ this.handleClick }>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Account;