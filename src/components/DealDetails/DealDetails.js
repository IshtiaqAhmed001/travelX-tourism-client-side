import React from 'react';
import { useParams } from 'react-router';
import useDeals from '../../hooks/useDeals';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';


const DealDetails = () => {
    const { id } = useParams();
    const { deals } = useDeals();
    const orderId = id;

    const singleDeal = deals.filter(deal => deal._id === id);

    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        const { name, email, address, city, phone } = data;

        let newOrder = { orderId, status: 'pending', name, email, address, city, phone };
        newOrder.itemDetails = singleDeal[0];

        fetch('https://shrouded-meadow-59563.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Booking completed!');
                    reset();
                }
            })
        // console.log(data);

    }
    return (
        <div>

            <div className="services container ">
                <div className="">
                    {singleDeal.map(deal => <div key={deal._id} className="">

                        <img className="w-50" src={deal.img} alt="" />
                        <h3 className="w-50 mx-auto bg-primary p-2 rounded-3 text-white">{deal.name}</h3>
                    </div>)}
                </div>
            </div>


            <div className="my-1">
                <h1>Please procees to confirm</h1>

                <form className="my-5 w-75 mx-auto border border-1 p-5 border-warning" onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" defaultValue={user.displayName} {...register("name")} />
                    <br />

                    <input className="form-control" defaultValue={user.email} {...register("email", { required: true })} />
                    <br />
                    {errors.email && <span className="error">This field is required</span>}
                    <input className="form-control" placeholder="Address" defaultValue="" {...register("address")} />
                    <br />
                    <input className="form-control" placeholder="City" defaultValue="" {...register("city")} />
                    <br />
                    <input className="form-control" placeholder="Phone" defaultValue="" {...register("phone")} />
                    <br />
                    <input className="btn btn-lg btn-warning" value="Click to Book" type="submit" />
                </form>

            </div>

        </div>

    );
};

export default DealDetails;