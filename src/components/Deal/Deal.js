import React from 'react';
import { useHistory } from 'react-router';
import './Deal.css';

const Deal = ({ deal }) => {
    const history = useHistory();
    const { _id, name, price, destination, img } = deal;

    const handleViewDetails = id => {
        const url = `/deals/placeorder/${id}`;
        history.push(url);

    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="img-container">
                <img className="w-100" src={img} alt="" />
            </div>
            <h3>{name}</h3>
            <h5>{destination}</h5>
            <h6>Price: {price}</h6>
            <button onClick={() => handleViewDetails(_id)} className="btn btn-warning"><strong>Book Now</strong></button>

        </div >

    );
};


export default Deal;