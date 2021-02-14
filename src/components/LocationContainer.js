import React, { useEffect, useState } from 'react';
import LocationInfo from './LocationInfo';

const LocationContainer = (props) => {
    const axios = require('axios').default;
    const baseURL = 'https://rickandmortyapi.com/api/location';
    const [info, setInfo] = useState([]);
    const search = props.search;
    console.log(search);

    useEffect(() => {
        axios.get(`${baseURL}?name=${search}`)
            .then(function (response) {
                console.log(response);
                setInfo(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return(
        <>
            {info.length > 0 && 
                <LocationInfo location={info}/>
            }
        </>
    );
}

export default LocationContainer;