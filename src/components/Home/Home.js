import React from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import useDeals from '../../hooks/useDeals';
import Deal from '../Deal/Deal';
import useAuth from '../../hooks/useAuth';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faCampground, faMapMarkerAlt, faPencilAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import h1 from '../../images/hotels/1.jpg';
import h2 from '../../images/hotels/2.jpg';
import h3 from '../../images/hotels/3.jpg';





const Home = () => {
    const { deals } = useDeals();
    const { isLoading } = useAuth();
    if (isLoading) {
        return <div class="text-center">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }
    return (
        <div >
            {/* slider/carousel  */}
            <div className="slider">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/vjV8Sqb/friends.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="slider-title title1" >Making the most out of your holiday</h3>
                            <p className="text-dark fs-5">TravelX, providing the best packages for friends and family</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/Wy8ttgf/maldives.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3 className="slider-title title2" >Picture perfect destinations</h3>
                            <p className="fs-5">Enjoy the best sunsets with us</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/dBsZ3mr/surf.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className="slider-title title3" >Beauty of Discovery</h3>
                            <p className="text-dark fs-5">Explore and get the best out of yourself</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/zb1Khr9/concert.jpg"
                            alt="Fourth slide"
                        />
                        <Carousel.Caption>
                            <h3 className="slider-title title4" >Experience different cultures </h3>
                            <p className="fs-5">Enjoy the best of the cultures</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* deals/packages section  */}
            <div className="container my-5">
                <h6 className="slogan">Travel Save Repeat</h6>
                <h1 className="display-5 mb-5 section-title"> Explore the World with Us</h1>
                <p className="text-success fs-3">Trending Packages</p>
                <div className="row g-4 mb-5">
                    {
                        deals.map(deal => <Deal
                            key={deal._id}
                            deal={deal}>
                        </Deal>)
                    }
                </div>
            </div>
            {/* offers section  */}
            <div className="offer-section row g-4 p-5">
                {/* <img className="w-100 offer-img" src={offerImg} alt="" /> */}
                <div className="col-lg-6 col-md-12">
                    <h1 className="display-1 discount-price my-5 p-3">45%</h1>
                </div>
                <div className="offer-brief col-lg-6 col-md-12">
                    <h1 className="display-2 fw-bold mt-5">Last Minute Offer</h1>
                    <h6 className="fs-4 mb-5">Bungee Jumping In Nepal</h6>
                    <p className="fs-5">Nepal is adorned with beautiful views that make it a great place to indulge in bungee jumping. There are only 2 places that offer the opportunity to experience it. Also, bungee jumping rate in Nepal is not a concern when you want to treat yourself.</p>
                    <button type="button" className="btn btn-lg btn-outline-light">View More</button>
                </div>
            </div>
            {/* video playback section  */}

            <div>
                <h6 className="slogan mt-5">Life time experiences</h6>
                <h1 className="section-title mb-5 display-5">Our Latest Vlogs</h1>

                <iframe className="video-player " src="https://www.youtube.com/embed/zHcr32gRRCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
            {/* additional services section  */}
            <div className="additional-services p-3 ">
                <h1 className="display-5 p-3  section-title"> Additional Services</h1>
                <h6 className="slogan">Your comfort is our happiness</h6>
                <div className="row mx-1 my-3">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="icon-container w-50 mx-auto my-5">
                            <FontAwesomeIcon className="services-icons" icon={faCampground} />
                        </div>
                        <div>
                            <h3>Special Activities</h3>
                            <p className="text-start">Our packages includes special activites like camping,horsebake riding,mountain biking,whitewater rafting and many more.. </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="icon-container w-50 mx-auto my-5">
                            <FontAwesomeIcon className="services-icons" icon={faStar} />
                        </div>
                        <div>
                            <h3>Your Private Guide</h3>
                            <p className="text-start">Our private guides are there to answer any questions you might have about their city, region to give you an insider's view.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="icon-container w-50 mx-auto my-5">
                            <FontAwesomeIcon className="services-icons" icon={faPencilAlt} />
                        </div>
                        <div>
                            <h3>Travel Management</h3>
                            <p className="text-start">Our travel management service includes transportaion,accomationds and other required services according to your needs</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="icon-container w-50 mx-auto my-5">
                            <FontAwesomeIcon className="services-icons" icon={faMapMarkerAlt} />
                        </div>
                        <div>
                            <h3>Location Manager</h3>
                            <p className="text-start">Our location managers work with our tour guides to make your experience smooth and memorable. </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* recommended hotels  */}
            <div className="row g-4 my-5">
                <h3 className="display-2 mb-4">Most Recommended Hotels</h3>
                <div className="col-lg-5 col-md-12">
                    <h3 className="my-3">Want to get our hottest travel deals top tips and advice? Subscribe us now!</h3>
                    <div class="input-group my-5">
                        <input type="text" class="form-control" placeholder="Enter your email address" aria-label="Enter your email address" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button"> <FontAwesomeIcon className="text-dark" icon={faTelegramPlane} /></button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="row g-1">
                        <div className="col-lg-4 col-md-12">
                            <img className="w-100" src={h1} alt="" />
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <img className="w-100" src={h2} alt="" />
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <img className="w-100" src={h3} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;