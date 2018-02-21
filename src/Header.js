import React ,{ Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

    render() {
      return (
                <div>
                    <div className="header_sec">
                        <div className="header_top">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-2">
                                        <ul>
                                            <li>
                                                <a href="/">
                                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="fa fa-google" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-10">
                                        <ul>
                                            <div className="login">
                                                <NavLink to={"/login.htm"} >Login</NavLink>
                                            </div>
                                            <div className="sign_up">
                                                <NavLink to={"/signup.htm"}>Sign Up</NavLink>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header_btom">
                            <div className="container">
                                <nav className="navbar navbar-default ">
                                    <div className="container">
                                        <div className="navbar-header">
                                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                                                aria-controls="navbar">
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>                                        

                                            <NavLink  className="navbar-brand" to={"/"}>
                                                <img src="img/logo.jpg"/>
                                            </NavLink>
                                        </div>
                                        <div id="navbar" className="navbar-collapse collapse">
                                            <ul className="nav navbar-nav">
                                                <li>
                                                    <a href="/login.htm" className="nav_active">Home</a>
                                                </li>
                                                <li>
                                                    <a href="/login.htm">About </a>
                                                </li>
                                                <li>
                                                    <a href="/login.htm">Training</a>
                                                </li>
                                                <li>
                                                    <a href="/login.htm">Education</a>
                                                </li>
                                                <li>
                                                    <a href="/login.htm">Contact</a>
                                                </li>
                                            </ul>
                                            <div className="head_Srch">
                                                <input type="text" placeholder="Search"/>
                                                <button type="submit" className="search-submit btn search-btn">
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                )
    }
}
