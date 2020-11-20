import React from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css"

const Header = ({isDark, darkModeHandler}) => {
    return(
        <div className='header'>
            <h2>Where in the world?</h2>
            <div className="toggle-switch">
                <span> ☾ Dark Mode</span>
                <Toggle
                    className="DarkToggle"
                    checked={isDark}
                    onChange={darkModeHandler}
                    icons={false}
                    aria-label="Dark mode"
                />
            </div>
        </div>
    )
}

export default Header