import { React, useCallback } from 'react';

const Track = (props) => {
    const addTrack = useCallback((event) => {
        props.onAdd(props.track);
    },
    [props.onAdd, props.track]
    );

    const removeTrack = useCallback((event) => {
        props.onRemove(props.track);
    },
    [props.onRemove, props.track]
    );

    const renderAction = () => {
        if (props.isRemoval) {
            return ( 
            <button className="Track-action" onClick={removeTrack}>
                -
            </button>
        )
        }
        return (
            <button className="Track-action" onClick={addTrack}>
                +
            </button>
        )
    }




    return (
        <div className="Track">
            <div className="track-information">
                <h2>{props.track.name}</h2>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track;