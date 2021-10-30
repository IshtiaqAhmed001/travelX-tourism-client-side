import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useDeals from '../../hooks/useDeals';

const MyBookings = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);






    return (
        <div>
            <h2>Total Bookings: {orders.length}</h2>

            <div className="row g-4">
                {orders.map(order => <div key={order._id} className="col-lg-4 col-md-6 col-sm-12">
                    <div className="img-container">
                        <img className="w-100" src={order.itemDetails.img} alt="" />
                    </div>
                    <h3>{order.itemDetails.name}</h3>
                    <h6>{order.itemDetails.destination}</h6>

                    <p>Price: {order.itemDetails.price}</p>

                </div>)}
            </div>
        </div>
    );
};

export default MyBookings;