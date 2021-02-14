import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo.js';

// calls the API with each resident's url. saves each resident's info as state 'residents' that is passed as a prop to ResidentInfo. 

const ResidentContainer = (props) => {
    const [residents, setResidents] = useState([]);
    const axios = require('axios').default;
    const url = props.url;
    useEffect(() => {
        url.forEach(character => {
            axios.get(`${character}`)
                .then(function (response) {
                    setResidents(residents => [...residents, response.data]);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    }, [])
    return(
        <>
            {residents.length === url.length && 
                <ResidentInfo info={residents}/>
            }
        </>
    );
}

export default ResidentContainer;