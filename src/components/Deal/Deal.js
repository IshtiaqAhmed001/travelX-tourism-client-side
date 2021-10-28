import React from 'react';
import { useHistory } from 'react-router';
import './Deal.css';

const Deal = ({ deal }) => {
    const history = useHistory();
    const { _id, name, price, destination, img } = deal;

    const handleViewDetails = id => {
        const url = `/deals/details/${id}`;
        history.push(url);

    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="img-container">
                <img className="w-100" src={img} alt="" />
            </div>
            <h3>{name}</h3>
            <h6>{destination}</h6>
            <button onClick={() => handleViewDetails(_id)} className="btn btn-primary">View Details</button>
            <p>Price: {price}</p>
        </div>
    );
};

export default Deal;