import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <NavLink className="navLink" to="/home">Home</NavLink>
            <NavLink className="navLink" to="/destinations">Destinations</NavLink>
            <NavLink className="navLink" to="/packages">Packages</NavLink>
            <NavLink className="navLink" to="/about">About</NavLink>
            <NavLink className="navLink" to="/login">Login</NavLink>

        </div>
    );
};

export default Header;