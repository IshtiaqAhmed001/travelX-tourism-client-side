import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="" >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="fw-bold" >
                        <NavLink className="navLink" to="/home">TravelX</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="navLink" to="/home">Home</NavLink>
                            <NavLink className="navLink" to="/destinations">Destinations</NavLink>
                            <NavLink className="navLink" to="/deals">Deals</NavLink>
                            <NavLink className="navLink" to="/about">About</NavLink>

                            {/* display user name and Logout button if looged in  */}
                            {
                                user.displayName && <button className="user-name text-warning" >{user.displayName}</button>
                            }
                            {
                                user.email ? <button className="nav-button" onClick={logOut}>Log Out</button>
                                    :
                                    <NavLink className="navLink" to="/login">Login</NavLink>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <div className="container d-flex justify-content-between align-items-center">
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

                </div> */}

        </div>
    );
};

export default Header;