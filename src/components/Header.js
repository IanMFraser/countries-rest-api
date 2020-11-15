import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return(
        <header>
            <h2>Where in the world?</h2>
            <button><FontAwesomeIcon icon={faMoon} /> Dark Mode</button>
        </header>
    
    )
}

export default Header