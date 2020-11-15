import React from 'react'
import CountryCard from './CountryCard'

const DisplayCountries = ({data}) => {

    return(
        <div className="display-countries">
            {data.map((country) => {
                return <CountryCard  key={country.name} flag={country.flag} name={country.name} pop={country.population} region={country.region} capital={country.capital} />
            })}
        </div>
    )
}

export default DisplayCountries