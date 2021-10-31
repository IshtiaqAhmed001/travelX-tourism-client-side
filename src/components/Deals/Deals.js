import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useDeals from '../../hooks/useDeals';
import Deal from '../Deal/Deal';

const Deals = () => {
    const { isLoading } = useAuth();
    const { deals } = useDeals();

    if (isLoading) {
        return <div class="text-center">
            <Spinner className="my-5" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }



    return (
        <div className="container my-4">
            <h1 className="display-5 mb-5 section-title"> Deals we are currently offering</h1>
            <div className="row g-4 mb-5">
                {
                    deals.map(deal => <Deal
                        key={deal._id}
                        deal={deal}>
                    </Deal>)
                }
            </div>
        </div>
    );
};

export default Deals;