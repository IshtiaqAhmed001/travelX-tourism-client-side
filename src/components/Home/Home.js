import React from 'react';
import useDeals from '../../hooks/useDeals';
import Deal from '../Deal/Deal';

const Home = () => {
    const { deals } = useDeals();
    return (
        <div className="container">
            <h2>THis is home</h2>
            <div>
                <h1 className="display-5 my-5"> Explore the World with Us</h1>
                <p className="text-success fs-3">Trending Packages</p>
                <div className="row g-4 mb-5">
                    {
                        deals.map(deal => <Deal
                            key={deal._id}
                            deal={deal}>
                        </Deal>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;