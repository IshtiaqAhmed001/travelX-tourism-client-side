import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddNewDeal = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        const { name, price, destination, img } = data;
        const newDeal = { name, price, destination, img };

        fetch('https://shrouded-meadow-59563.herokuapp.com/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newDeal)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Deal added successfully!');
                    reset();
                }
            })
    }


    return (
        <div >
            <h2 className="display-6 fw-bold mt-5">Add a New Deal</h2>
            <div className="w-75 mx-auto my-5">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control" placeholder="Deal Name "  {...register("name", { required: true })} />
                    <br />
                    <input className="form-control" placeholder="Destination "  {...register("destination", { required: true })} />
                    <br />
                    <input className="form-control" placeholder="Price "  {...register("price", { required: true })} />
                    <br />
                    <input className="form-control" placeholder="Image URL "  {...register("img", { required: true })} />
                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="btn btn-lg btn-warning p-2 w-25" value="Add Deal" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewDeal;