import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, []);

    if (isLoading) {
        return <div class="text-center">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }

    return (
        <div className="container">
            <h2>THis is destinations</h2>
            <div className="row g-4">
                {destinations.map(destination => <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="img-container">
                        <img className="w-100" src={destination.img} alt="" />
                    </div>
                    <h3>{destination.name}</h3>
                    <h6>{destination.description}</h6>
                </div>)}
            </div>
        </div>
    );
};

export default Destinations;