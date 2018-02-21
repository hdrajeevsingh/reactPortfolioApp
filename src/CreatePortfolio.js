import React from 'react';
import { NavLink } from 'react-router-dom';

class CreatePortfolio extends React.Component{
    render() {
      return (
                <div id="wrapper">
                    <div id="page-content-wrapper">
                        <div class="content-header">
                            <div class="row">
                                <div class="col-md-1">
                                    <h1>
                                        <a id="menu-toggle" href="#" class="btn btn-default">
                                            <i class="fa fa-bars" aria-hidden="true"></i>
                                        </a>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div class="page-content inset">
                            <div class="crt_port_home">
                                <div class="creat_btn">
                                    <NavLink to="/portfolio.htm">Create Portfolio</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      )
    };
}

export default CreatePortfolio;