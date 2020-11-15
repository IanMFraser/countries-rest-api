import React from 'react'

const Search = ({searchField, searchHandler, region, regionHandler}) => {
    return(
        <div className="search-bar">
            <form className="search-form">
                <input placeholder="Search for a country..." value={searchField} onChange={searchHandler}></input>
                <select value={region} onChange={regionHandler}>
                    <option value="">Filter By Region </option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </form>
        </div>
    )
}

export default Search