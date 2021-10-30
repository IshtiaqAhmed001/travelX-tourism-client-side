import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);


    const myBookings = orders.filter(order => order.email === user.email);

    return (
        <div>
            <h1>Total Bookings on website: {orders.length}</h1>
            <h2>My Bookings: {myBookings.length}</h2>

            <div className="row g-4">
                {myBookings.map(booking => <div key={booking._id} className="col-lg-4 col-md-6 col-sm-12">
                    <div className="img-container">
                        <img className="w-100" src={booking.itemDetails.img} alt="" />
                    </div>
                    <h3>{booking.itemDetails.name}</h3>
                    <h6>{booking.itemDetails.destination}</h6>

                    <p>Price: {booking.itemDetails.price}</p>

                </div>)}
            </div>
        </div>
    );
};

export default MyBookings;