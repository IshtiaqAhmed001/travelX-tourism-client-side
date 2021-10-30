import { useEffect, useState } from "react";

const useOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-meadow-59563.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    return { orders, setOrders }
}

export default useOrders;