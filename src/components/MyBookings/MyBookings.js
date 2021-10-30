import React from 'react';
import useAuth from '../../hooks/useAuth';
import useOrders from '../../hooks/useOrders';

const MyBookings = () => {
    const { user } = useAuth();
    const { orders, setOrders } = useOrders();

    // filtering only specific user's orders
    const myBookings = orders.filter(order => order.email === user.email);

    // cancel booking 
    const handleCancelBooking = id => {
        const proceed = window.confirm('Are you sure you want to delete ?');
        if (proceed) {
            const url = `http://localhost:5000/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Booking canceled!');
                        window.location.reload();
                    }
                })
        }
    }

    return (
        <div>
            <h1>Total Bookings on website: {orders.length}</h1>
            <h2 className="my-5">My Bookings: {myBookings.length}</h2>

            <div className="row g-4">
                {myBookings.map(booking => <div key={booking._id} className="col-lg-4 col-md-6 col-sm-12">
                    <div className="img-container">
                        <img className="w-100" src={booking.itemDetails.img} alt="" />
                    </div>
                    <h3>{booking.itemDetails.name}</h3>
                    <h6>{booking.itemDetails.destination}</h6>

                    <p>Price: {booking.itemDetails.price}</p>
                    <button onClick={() => handleCancelBooking(booking._id)} className="btn btn-warning fw-bold"><h3>Cancel Booking</h3></button>
                </div>)}
            </div>
        </div>
    );
};

export default MyBookings;