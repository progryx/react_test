import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = props => {
    return (
        <nav className="nav flex-column nav-pills my-3 p-3 bg-white rounded shadow-sm">
                <NavLink to={`/profile/${props.userId}`} activeClassName='active' className="nav-link border-bottom border-gray pb-2 mb-0">Profile</NavLink>
                <NavLink to="/dialogs" activeClassName='active' className="nav-link border-bottom border-gray pb-2 mb-0">Messages</NavLink>
                <NavLink to="/news" activeClassName='active' className="nav-link border-bottom border-gray pb-2 mb-0">News</NavLink>
                <NavLink to="/users" activeClassName='active' className="nav-link border-bottom border-gray pb-2 mb-0">Users</NavLink>
                <NavLink to="/music" activeClassName='active' className="nav-link border-bottom border-gray pb-2 mb-0">Music</NavLink>
                <NavLink to="/settings" activeClassName='active' className="nav-link border-bottom border-gray pb-2 mb-0">Settings</NavLink>
        </nav>
    );
}

export default Navbar;