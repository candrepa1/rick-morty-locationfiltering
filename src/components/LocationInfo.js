import React from 'react';
import ResidentContainer from './ResidentContainer';

// receives all the information about the location from LocationContainer and creates a list from that. calls ResidentContainer to retrieve the residents' info, it passes that component urls of the residents as a prop. 

const LocationInfo = (props) => {
    const info = props.location;
    const list = info.map((item) => <><li><b>Name:</b> {item.name}</li><li><b>Type:</b> {item.type}</li><li><b>Dimension:</b> {item.dimension}</li><li><b>Number of Residents:</b> {item.residents.length}</li></>);

    return(
        <>
            <div className="d-flex justify-content-center">
                <ul className="list-unstyled w-50 text-center bg-secondary rounded-pill p-3 text-light">{list}</ul>
            </div>
            <ResidentContainer url={info[0].residents}/>
        </>
    );
}

export default LocationInfo;