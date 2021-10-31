import React from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import useDeals from '../../hooks/useDeals';
import Deal from '../Deal/Deal';
import useAuth from '../../hooks/useAuth';
import './Home.css';

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
                <h1 className="display-5 mb-5"> Explore the World with Us</h1>
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
                <div className="col-lg-6 col-sm-12">
                    <h1 className="display-1 discount-price my-5">45%</h1>
                </div>
                <div className="offer-brief col-lg-6 col-sm-12">
                    <h1 className="display-2 fw-bold mt-5">Last Minute Offer</h1>
                    <h6 className="fs-4 mb-5">Bungee Jumping In Nepal</h6>
                    <p className="fs-5">Nepal is adorned with beautiful views that make it a great place to indulge in bungee jumping. There are only 2 places that offer the opportunity to experience it. Also, bungee jumping rate in Nepal is not a concern when you want to treat yourself.</p>
                    <button type="button" className="btn btn-lg btn-outline-light">View More</button>
                </div>
            </div>
        </div >
    );
};

export default Home;