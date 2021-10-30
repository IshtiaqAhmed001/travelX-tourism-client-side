import { useEffect } from "react";
import { useState } from "react"

const useDeals = () => {
    const [deals, setDeals] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-meadow-59563.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setDeals(data))
    }, []);

    return { deals, setDeals }
}
export default useDeals;