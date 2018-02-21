import React from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends React.Component{
    render(){
        return(
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                    <li className="sidebar-brand"><a href="/"><img src="img/dashboard_logo.png"/></a> </li>
                    <li className="pf_img"><img src="img/profile_img.png"/></li>
                    <li><NavLink to="/my-account.htm" className="dash_active">My Account</NavLink></li>
                    <li><NavLink to="/portfolio.htm">Your portfolio</NavLink></li>
                    <li><NavLink to="" >Symbol look up</NavLink></li>
                    <li><NavLink to="" >training</NavLink></li>
                    <li><NavLink to="" >Social</NavLink></li>
                    </ul>
                </div>
        );
    }
}

export default Sidebar;