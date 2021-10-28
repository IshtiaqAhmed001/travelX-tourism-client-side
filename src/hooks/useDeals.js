import { useEffect } from "react";
import { useState } from "react"

const useDeals = () => {
    const [deals, setDeals] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setDeals(data))
    }, []);

    return { deals, setDeals }
}
export default useDeals;