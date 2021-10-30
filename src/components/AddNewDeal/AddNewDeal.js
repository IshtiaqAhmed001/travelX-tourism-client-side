import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddNewDeal = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        const { name, price, destination, img } = data;
        const newDeal = { name, price, destination, img };

        fetch('http://localhost:5000/packages', {
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
            <h2>Add a new deal</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder="Deal Name "  {...register("name", { required: true })} />
                    <br />
                    <input placeholder="Destination "  {...register("destination", { required: true })} />
                    <br />
                    <input placeholder="Price "  {...register("price", { required: true })} />
                    <br />
                    <input placeholder="Image URL "  {...register("img", { required: true })} />
                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input value="Add" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewDeal;