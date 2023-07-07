import React from "react";

const SearchBox = ({searchField, searchChange}) => {
    return(
        <div>
            <input 
                className="pa3 ba b--green bg-lightest-blue" 
                type ='seacrh' 
                placeholder="search robots" 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;