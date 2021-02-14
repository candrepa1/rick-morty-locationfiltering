import React, { useState } from 'react';

// renders a card for each resident. limits the amount of residents displayed to 10, if the location has more than 10 residents a button is shown to load more residents, if there are no more residents to display, the button is hidden. 

const ResidentInfo = (props) => {
    const [start] = useState(0);
    const [end, setEnd] = useState(10);
    const resident = props.info;

    const handleClick = () => {
        setEnd(end => end + 10);
    };
    
    const listCharacters = resident.slice(start, end).map((character) =>
        <div className="col-md-6">
            <div className="card mb-3 bg-dark text-white border-0 rounded">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={character.image} alt={character.name} className="w-100 h-100"/>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="card-body py-3 px-0 h-100 d-flex flex-column justify-content-center">
                            <h5 className="card-title font-weight-bold mb-0">{character.name}</h5>
                            <p className="card-text">{character.status}</p>
                            <h6 className="card-text text-muted mb-0">Originally from: </h6>
                            <p className="card-text">{character.origin.name}</p>
                            <h6 className="card-text text-muted mb-0">Number of episodes: </h6>
                            <p className="card-text">{character.episode.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    return(
        <>
            <div className="row mt-4 mb-2">{listCharacters}</div>
            {end < resident.length && 
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success mb-4" onClick={handleClick}>Load more ...</button>
                </div>
            }
        </>
    );
}

export default ResidentInfo;