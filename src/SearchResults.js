import React from 'react';

import  TrackList  from "./TrackList";


const SearchResults = (props) => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList track={props.TrackList} onAdd={props.onAdd} />
        </div>
    )
}

export default SearchResults;