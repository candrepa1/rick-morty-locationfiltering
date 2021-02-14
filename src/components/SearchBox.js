import React, { useState } from 'react';
import LocationContainer from './LocationContainer';
import OnLoad from './OnLoad';

// a form with an input and a button, to begin it has a 'start' value that triggers the OnLoad Component, which basically renders a random location information. when the input is typed on, the state changes to false to avoid OnLoad Component from being triggered, and after the user submits the form the state changes to 'sent' and triggers the LocationContainer Component with the information of the location the user typed in. 

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