import React from 'react';
import useDeals from '../../hooks/useDeals';
import Deal from '../Deal/Deal';

const Deals = () => {
    const { deals } = useDeals();
    return (
        <div>
            <h2 className="my-5 display-1 text-dark">All deals</h2>
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