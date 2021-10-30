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

        fetch('http://localhost:5000/bookings', {
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
                        <img className="w-25" src={deal.img} alt="" />
                        <h3 className="w-25 mx-auto bg-primary p-2 rounded-3 text-white">{deal.name}</h3>
                    </div>)}
                </div>
            </div>


            <div className="my-1">
                <h1>Please procees to confirm</h1>

                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <br />

                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    <br />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <br />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <br />
                    <input placeholder="Phone" defaultValue="" {...register("phone")} />
                    <br />
                    <br />
                    <input value="book" type="submit" />
                </form>
            </div>

        </div>

    );
};

export default DealDetails;