import React from 'react';
import { Carousel } from 'react-bootstrap';
import useDeals from '../../hooks/useDeals';
import Deal from '../Deal/Deal';
import img1 from '../../images/slider/friends.jpg';
import img2 from '../../images/slider/maldives.jpg';
import img3 from '../../images/slider/surf.jpg';
import img4 from '../../images/slider/concert.jpg';


const Home = () => {
    const { deals } = useDeals();
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
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img4}
                            alt="Fourth slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container">
                <h1 className="display-5 my-5"> Explore the World with Us</h1>
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