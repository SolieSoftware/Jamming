import React from 'react';

import "./TrackList.css";

import  Track  from "./Track";

const TrackList = (props) => {
    return (
        <div className="">
        {props.tracks?.map((track => {
            return (
                <Track
                track={track}
                key={track.id}
                onAdd={props.onAdd}
                isRemoval={props.isRemoval}
                onRemoval={props.onRemoval}
                />
            );
        }))}

        </div>
    )
}

export default TrackList;
