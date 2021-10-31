import React from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import useDeals from '../../hooks/useDeals';
import Deal from '../Deal/Deal';
import img1 from '../../images/slider/friends.jpg';
import img2 from '../../images/slider/maldives.jpg';
import img3 from '../../images/slider/surf.jpg';
import img4 from '../../images/slider/concert.jpg';
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
            <div className="slider">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
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
                            src={img2}
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
                            src={img3}
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
                            src={img4}
                            alt="Fourth slide"
                        />

                        <Carousel.Caption>
                            <h3 className="slider-title title4" >Experience different cultures </h3>
                            <p className="fs-5">Enjoy the best of the cultures</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
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
        </div>
    );
};

export default Home;