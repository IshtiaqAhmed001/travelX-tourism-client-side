import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useOrders from '../../hooks/useOrders';

const ManageAllBookings = () => {
    const { user } = useAuth();
    const { orders, setOrders } = useOrders();

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
    const handleUpdateOrderStatus = id => {
        const updatedOrders = orders.filter(order => order._id === id);
        updatedOrders[0].status = "Approved";
        const updatedOrder = updatedOrders[0];

        console.log(updatedOrder)

        const url = `https://shrouded-meadow-59563.herokuapp.com/manageallorders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedOrder)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Order status Updated successfully!');
                    window.location.reload();
                }
            })
    }

    return (
        <div>
            <h1 className="display-5 mt-5">Total Bookings on website: {orders.length}</h1>
            <hr className="w-50 mx-auto mb-5" />

            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Package Name</th>
                            <th>Destination</th>
                            <th>Price</th>
                            <th>Booked By</th>
                            <th>Order Status</th>
                            <th>Update Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => < tr >
                                <td>{order.itemDetails.name}</td>
                                <td>{order.itemDetails.destination}</td>
                                <td>{order.itemDetails.price}</td>
                                <td>{order.email}</td>
                                <td><strong>{order.status}</strong></td>
                                <td><button onClick={() => handleCancelBooking(order._id)} className="btn btn-warning  fw-bold">Cancel Booking</button></td>
                                <td><button onClick={() => handleUpdateOrderStatus(order._id)} className="btn btn-success">Update Order Status</button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>


            {/* <div className="row h-100 mx-auto g-4">
                {orders.map(order => <div key={order._id} className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <div className="img-container">
                        <img className="w-75" src={order.itemDetails.img} alt="" />
                    </div>
                    <h3>{order.itemDetails.name}</h3>
                    <h6>{order.itemDetails.destination}</h6>
                    <p>Price: {order.itemDetails.price}</p>
                    <p>Booked By: <strong>{order.email}</strong></p>
                    <p>Order Status: <strong>{order.status}</strong></p>

                    <button onClick={() => handleCancelBooking(order._id)} className="btn btn-warning fw-bold"><h3>Cancel Booking</h3></button>
                    <button onClick={() => handleUpdateOrderStatus(order._id)} className="btn btn-success">Update Order Status</button>
                </div>)}
            </div> */}
        </div >
    );
};

export default ManageAllBookings;