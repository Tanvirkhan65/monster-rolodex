import React from 'react';

const SearchField = ({ handleChange }) => (
    <div>
        <input
            onChange={handleChange}
            type="text"
            placeholder="Search monsters"
        />
    </div>
);

export default SearchField;
