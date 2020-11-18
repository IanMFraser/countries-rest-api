import React from 'react';
import { Input, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Search = ({searchField, searchHandler, region, regionHandler}) => {

    const options = [
        {key: 'default', value: '', text: 'All' },
        {key: 'africa', value: 'africa', text: 'Africa'},
        {key: 'america', value: 'america', text: 'America'},
        {key: 'asia', value: 'asia', text: 'Asia'},
        {key: 'europe', value: 'europe', text: 'Europe'},
        {key: 'oceania', value: 'oceania', text: 'Oceania'}
    ]

    return(
        <div className="search-bar">
            <Input 
                className="ui input inputStyle"  
                icon="search" 
                iconPosition="left" 
                placeholder="Search for a country ..." 
                value={searchField} 
                onChange={searchHandler}
                aria-label="search-input" 
            />
            <Dropdown 
                className="dropdownStyle" 
                floating 
                selection 
                placeholder="Filter By Region..." 
                options={options} 
                value={region} 
                onChange={regionHandler}
            />
        </div>
    )
}

export default Search