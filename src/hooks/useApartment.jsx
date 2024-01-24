import { useEffect, useState } from "react";


const useApartment = () => {
    const [apartments, setApartments] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://house-hunter-server-pied-seven.vercel.app/apartments')
            .then(res => res.json())
            .then(data => {
                setApartments(data);
                setLoading(false);
            });
    }, [])
    return [apartments, loading]
};

export default useApartment;