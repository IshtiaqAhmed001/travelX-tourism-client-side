import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
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
                    {
                        user.email ? <button className="nav-button" onClick={logOut}>Log Out</button>
                            :
                            <NavLink className="navLink" to="/login">Login</NavLink>

                    }

                </div>

            </div>

        </div>
    );
};

export default Header;