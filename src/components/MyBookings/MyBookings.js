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
            const url = `https://shrouded-meadow-59563.herokuapp.com/bookings/${id}`;
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
            <h2 className="mt-5 display-6 fw-bold">My Bookings: {myBookings.length}</h2>
            <hr className="w-50 mx-auto mb-5" />
            <div className="row w-50 mx-auto my-5 g-3 border border-2 border-warning p-5">
                {myBookings.map(booking => <div key={booking._id} className="col-lg-4 col-md-6 col-sm-12">
                    <div className="img-container">
                        <img className="w-50" src={booking.itemDetails.img} alt="" />
                    </div>
                    <h3>{booking.itemDetails.name}</h3>
                    <h5>{booking.itemDetails.destination}</h5>
                    <p>Price: {booking.itemDetails.price}</p>
                    <button onClick={() => handleCancelBooking(booking._id)} className="btn btn-warning fw-bold">Cancel Booking</button>
                </div>)}
            </div>
        </div>
    );
};

export default MyBookings;