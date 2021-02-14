import React, { useState } from 'react';

const ResidentInfo = (props) => {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10);
    console.log(props.info);
    const resident = props.info;
    
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
    console.log(listCharacters.length);
    console.log(resident);
    return(
        <div className="row my-4">{listCharacters}</div>
    );
}

export default ResidentInfo;