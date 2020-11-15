import React from 'react'

const CountryCard = ({flag, name, pop, region, capital}) => {
    
    return(
        <div className="country-card">
            <div className="country-flag"><img src={flag} alt="flag"></img></div>
            <div className="country-info">
                <h1 className="country-name">{name}</h1>
                <div className="country-data">
                    <p><span className="label">Population:</span> {pop}</p>
                    <p><span className="label">Region:</span> {region}</p>
                    <p><span className="label">Capital:</span> {capital}</p>
                </div>
            </div>
        </div>
    )
}

export default CountryCard;