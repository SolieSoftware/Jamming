import React, { useCallback, useState } from 'react';

import './SearchBar.css';

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const handleChangeTerm = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    },
    [props.onSearch, term]
    );

    return (
        <div className="SearchBar">
            <input placeholder="Enter Song Title" onChange={handleChangeTerm} />
            <button className="SearchButton" onClick={search}>
                SEARCH
            </button>
        </div>

    )

}

export default SearchBar;