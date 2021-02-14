import React, { useEffect, useState } from 'react';

import LocationContainer from './LocationContainer.js';

const OnLoad = () => {
    const [name, setName] = useState('');
    const axios = require('axios').default;
    const baseURL = 'https://rickandmortyapi.com/api/location';
    let id = Math.floor(Math.random() * Math.floor(108));

    useEffect(() => {
        axios.get(`${baseURL}/${id}`)
            .then(function (response) {
                console.log(response);
                setName(response.data.name);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    console.log(name);
    return(
        <>
            {name &&
                <LocationContainer search={name}/>
            }
        </>
    );
}

export default OnLoad;