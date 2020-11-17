import React from 'react'
import json from '../countries'

const DisplayBorderCountries = ({borders}) => {
    const countries = json;
    const borderingCountries = borders
    
    return(
        <div>
            {   
                countries.map(country => {
                        return borderingCountries.includes(country.code) ? 
                            <button key={`${country.code}`}>{country.name}</button> : null
                    }) 
        }
        </div>
    )
}

export default DisplayBorderCountries