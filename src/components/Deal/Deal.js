import React from 'react';

const Deal = ({ deal }) => {
    const { name, price, destination, img } = deal;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <img className="w-100" src={img} alt="" />
            <h3>{name}</h3>
            <h6>{destination}</h6>
            <p>Price: {price}</p>
        </div>
    );
};

export default Deal;