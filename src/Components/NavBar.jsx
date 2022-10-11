import React from 'react';
import Logout from './Logout';
import SearchBar from "./SearchBar";

class NavBar extends React.Component {

    /* ES UNA BARRA SIMPLE */
    render() {
        return (
            <>
                <SearchBar/>
                <Logout/>
            </>
        );
    }
    
}

export default NavBar;