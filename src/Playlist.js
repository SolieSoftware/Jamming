import React, { useCallback } from 'react';

import  TrackList  from './TrackList';

import "./Playlist.css";

const Playlist = (props) => {
    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        },
        [props.onNameChange]
    );

return (
    <div className="Playlist">
        <input onChange={handleNameChange} defaultValue={"New Playlist"} />
        <TrackList 
            track={props.PlaylistTracks}
            isRemoval={true}
            onRemoval={props.onRemoval}
        />
        <button className="Save" onClick={props.onSave}>
            Save To Playlist
        </button>
    </div>
);
}; 

export default Playlist;