import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';
const NotFound = () => {
    const history = useHistory();
    const handleHomeBtn = () => {
        history.push('/home');

    }

    return (

        <div className="error-container">
            <div className="my-5">
                <h1 className="display-1 fw- bold ">404</h1>
                <h4 className="display-2">Not found</h4>
                <p>The resource requested could not be found on this server!</p>
                <button onClick={handleHomeBtn} className="btn btn-warning btn-lg my-5">Home</button>
            </div>
        </div>
    );
};

export default NotFound;