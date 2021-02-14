import React, { useEffect, useState } from 'react';

import LocationContainer from './LocationContainer.js';

// picks a random number from 0 to 108, the total number of locations and calls the API with the number passed as the id parameter. then calls LocationContainer and passes the name of the location as a prop.

const OnLoad = () => {
    const [name, setName] = useState('');
    const axios = require('axios').default;
    const baseURL = 'https://rickandmortyapi.com/api/location';
    let id = Math.floor(Math.random() * Math.floor(108));

    useEffect(() => {
        axios.get(`${baseURL}/${id}`)
            .then(function (response) {
                setName(response.data.name);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return(
        <>
            {name &&
                <LocationContainer search={name}/>
            }
        </>
    );
}

export default OnLoad;