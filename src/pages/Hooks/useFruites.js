import { useEffect, useState } from 'react';

const useFruites = () => {

    const [fruites,setFruites] = useState([]);

    useEffect(() => {
        fetch("https://orgafresh-fruites-server-side.onrender.com/fruites")
            .then(res => res.json())
            .then(data => {
                setFruites(data)
            })
    },[])

    return [fruites,setFruites]
};

export default useFruites;