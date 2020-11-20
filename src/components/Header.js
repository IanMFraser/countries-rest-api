import React from 'react';
import "react-toggle/style.css"

const Header = ({isDark, darkModeHandler}) => {
    return(
        <div className='header'>
            <h2>Where in the world?</h2>
            <div className="toggle-switch">
                <button onClick={darkModeHandler}>
                    {
                        isDark ? 
                        <span> ☀ Light Mode</span> : 
                        <span>☾ Dark Mode</span> 
                    }
                </button>
            </div>
        </div>
    )
}

export default Header