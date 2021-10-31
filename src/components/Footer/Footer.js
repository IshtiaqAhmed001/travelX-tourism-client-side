import React from 'react';
import './Footer.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {

    const fbIcon = <FontAwesomeIcon icon={faFacebookSquare} />;
    const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;
    const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} />;
    const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />;
    return (
        <div className="footer-container">
            <div className="mx-4">
                <div className="row g-4 mx-auto">
                    <div className="mt-4 col-lg-4 col-md-6 col-sm-12">
                        <h1 className="text-start text-warning">TravelX</h1>
                        <p className="text-start text-warning">Travel Save Repeat
                        </p>
                        <p className="text-start"><span>Explore the world with us and</span> <br /> <span>make your life happening , adventerous and enjoyable</span></p>
                        <div className="text-start my-5">
                            <NavLink className="link-styles" to="/blabla">{fbIcon}</NavLink>
                            <NavLink className="link-styles" to="/blabla">{linkedInIcon}</NavLink>
                            <NavLink className="link-styles" to="/blabla">{twitterIcon}</NavLink>
                            <NavLink className="link-styles" to="/blabla">{youtubeIcon}</NavLink>
                        </div>
                    </div>
                    <div className="mt-4 col-lg-4 col-md-6 col-sm-12">

                        <ul>
                            <li><h2>Our Services</h2></li>
                            <li >Custom Tour Packages</li>
                            <li>Personal Guide</li>
                            <li>Pickup and Drop off</li>
                            <li>Accomodation Arragnements</li>
                        </ul>
                    </div>
                    <div className="mt-4 col-lg-4 col-md-6 col-sm-12">
                        <ul>
                            <li> <h2>Contact</h2></li>
                            <li >Address:</li>
                            <li >Bashundhara R/A, Dhaka</li>
                            <li>email: ishtiaq.wasi@gmail.com</li>
                            <li>Phone: 0123456</li>
                        </ul>
                    </div>
                </div>
                <p>© 2021 TravelX Inc. All rights reserved.</p>
            </div>


        </div>
    );
};

export default Footer;