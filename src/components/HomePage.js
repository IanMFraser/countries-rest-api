import React from 'react'
import Header from './Header';
import Search from './Search';
import DisplayCountries from './DisplayCountries';

const HomePage = ({ countries, searchField, searchHandler, region, regionHandler}) => {
    return(
        <div className="HomePage">
            <Header/>
            <Search 
                searchField={searchField} 
                searchHandler={searchHandler} 
                region={region} 
                regionHandler={regionHandler}
            />
            <DisplayCountries data={countries} />
        </div>
    )
}

export default HomePage