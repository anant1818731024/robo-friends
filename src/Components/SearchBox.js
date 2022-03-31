import React from 'react';

const SearchBox = (props) => {
    let searchChange = props.searchChange;

    return (
        <div className = 'pa2'> 
            <input 
                onChange = {searchChange}
                className = "pa3 ba b--green bg-lightest-blue"
                type = 'search' 
                placeholder = 'search robot'
            />
        </div>
    );
}

export default SearchBox;


