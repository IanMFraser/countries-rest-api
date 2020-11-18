import React from 'react'
import CountryCard from './CountryCard'
import { Link } from 'react-router-dom';

const DisplayCountries = ({data}) => {

    return(
        <div className="display-countries">
            {data.map((country) => {
                return (
                    <Link key={country.name} 
                        to={{
                        pathname: `/country/${country.name}`,
                        state: {countryData: country}}}
                    >
                        <CountryCard  
                                flag={country.flag} 
                                name={country.name} 
                                pop={country.population} 
                                region={country.region} 
                                capital={country.capital} 
                        />
                    </Link>
                )
            })}
        </div>
    )
}

export default DisplayCountries