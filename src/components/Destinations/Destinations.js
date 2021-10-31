import React, { useEffect, useState } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch('https://shrouded-meadow-59563.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, []);

    if (isLoading) {
        return <div className="text-center">
            <Spinner className="my-5" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }

    return (
        <div className="container my-5">
            <h1 className="display-5 section-title"> Top Destinations You Must Visit</h1>
            <hr className="mb-5 w-75 mx-auto" />
            <div className="row g-4">
                {destinations.map(destination => <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="card h-100">
                        <img className="card-img-top w-100" src={destination.img} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{destination.name}</h5>
                            <p className="card-text text-start"><small>{destination.description}</small></p>
                        </div>
                    </div>
                </div>)}
            </div>

        </div>
    );
};

export default Destinations;