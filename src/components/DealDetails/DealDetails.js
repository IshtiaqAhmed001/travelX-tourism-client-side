import React from 'react';
import { useParams } from 'react-router';
import useDeals from '../../hooks/useDeals';

const DealDetails = () => {
    const { id } = useParams();
    const { deals } = useDeals();

    const singleDeal = deals.filter(deal => deal._id === id);
    return (
        <div>
            <div>
                <div className="services container my-5">
                    <div className="row g-4 w-50 mx-auto">
                        {singleDeal.map(deal => <div key={deal._id} className="col-12">
                            <img className="w-100" src={deal.img} alt="" />
                            <h3 className="w-100 bg-primary p-2 rounded-3 text-white">{deal.name}</h3>
                            <button className="btn btn-warning w-100 fw-bold"><h3>Book Now</h3></button>

                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealDetails;