
import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";


// Some of this codes are from moudle 4.4

function SearchFilter({searchState}) { 
    return (
        <InputGroup className="col-6 searchAndFilter">
        <FormControl placeholder="Search after you game" onChange={data => searchState(data)} />
    </InputGroup>

    );
}

export default SearchFilter;
