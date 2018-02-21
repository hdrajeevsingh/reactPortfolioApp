import React ,{ Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {

    render() {
      return (
                <div>
                    <div className="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="footer_about">
                                        <a href="index.htm">
                                            <img src="img/footr_logo.png"/>
                                        </a>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="footer_quick">
                                        <h2>Quick Links</h2>
                                        <ul>
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Training</a>
                                            </li>
                                            <li>
                                                <a href="#">Leaders</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="footer_addrs">
                                        <h2>Address</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        <ul className="list-inline">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-google" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      )
    }
}