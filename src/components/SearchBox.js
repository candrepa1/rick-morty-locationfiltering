import React, { useState } from 'react';
import LocationContainer from './LocationContainer';
import OnLoad from './OnLoad';

const SearchBox = () => {
    const [locationInput, setLocationInput] = useState('');
    const [submit, setSubmit] = useState('start');

    const handleChange = (event) => {
        let typing = event.target.value;
        setLocationInput(typing);
        setSubmit(false);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmit('sent');
    }
    console.log(locationInput);
    return(
        <div>
            <div className="d-flex justify-content-center">
                <img src="https://thesnootyushers.files.wordpress.com/2017/04/rick-and-morty-logo.png" alt="logo"/>
            </div>
            <form onSubmit={handleSubmit} className="d-flex justify-content-center mb-4">
                <input onChange={handleChange} type="text" placeholder="Look up a location"/>
                <button className="btn btn-primary">Search</button>
            </form>
            {submit === 'start' &&
                <OnLoad />
            }
            {submit === 'sent' && 
                <LocationContainer search={locationInput} />
            }
        </div>
    );
}

export default SearchBox;