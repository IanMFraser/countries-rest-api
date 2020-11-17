import React, { useState, useEffect } from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css"

const Header = () => {
    
    const DARK_CLASS = "dark"
    const [isDark, setIsDark] = useState('')
  
    useEffect(() => {
        if(isDark) {
            document.documentElement.classList.add(DARK_CLASS)
        } else {
            document.documentElement.classList.remove(DARK_CLASS)
        }
    }, [isDark])

    return(
        <div className='header'>
            <h2>Where in the world?</h2>
            <div className="toggle-switch">
                <span> ☾ Dark Mode</span>
                <Toggle
                    className="DarkToggle"
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}
                    icons={false}
                    aria-label="Dark mode"
                />
            </div>
        </div>
    
    )
}

export default Header