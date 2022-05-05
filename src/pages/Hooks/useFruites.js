import { useEffect, useState } from 'react';

const useFruites = () => {

    const [fruites,setFruites] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/fruites")
            .then(res => res.json())
            .then(data => {
                setFruites(data)
            })
    },[])

    return [fruites,setFruites]
};

export default useFruites;