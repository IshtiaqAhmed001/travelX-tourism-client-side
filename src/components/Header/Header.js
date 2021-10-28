import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container" >

            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <h3 className="text-light">TravelX</h3>
                </div>
                <div>
                    <NavLink className="navLink" to="/home">Home</NavLink>
                    <NavLink className="navLink" to="/destinations">Destinations</NavLink>
                    <NavLink className="navLink" to="/deals">Deals</NavLink>
                    <NavLink className="navLink" to="/about">About</NavLink>
                    <NavLink className="navLink" to="/login">Login</NavLink>
                </div>

            </div>

        </div>
    );
};

export default Header;