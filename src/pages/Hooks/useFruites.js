import { useEffect, useState } from 'react';

const useFruites = () => {

    const [fruites,setFruites] = useState([]);

    useEffect(() => {
        fetch("https://sleepy-waters-32923.herokuapp.com/fruites")
            .then(res => res.json())
            .then(data => {
                setFruites(data)
            })
    },[])

    return [fruites,setFruites]
};

export default useFruites;