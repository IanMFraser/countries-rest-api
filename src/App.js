import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import DisplayCountries from './components/DisplayCountries';
import axios from 'axios';
import { useState, useEffect } from 'react'

const App = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')
  const [filtered, setFiltered] = useState(false)
  const URL = `https://restcountries.eu/rest/v2/all`

  useEffect(() => {
    axios.get(URL)
      .then(res => {   
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [URL])

  const searchHandler = (e) => {
    if(e.target.value === '') setFiltered(false)
    setSearch(e.target.value)
    setFiltered(true)
  }

  const regionHandler = (e) => {
    if(e.target.value === '') setFiltered(false)
    setRegion(e.target.value)
    setFiltered(true)
  }

  const filteredCountries = filtered ? data.filter( country => {
    //let returnedCountries = []
    let countryName = country.name.toLowerCase()
    let nameToSearch = search.toLowerCase()
    let regionName = country.region.toLowerCase()
    let regionToSearch = region.toLowerCase()

    return regionToSearch !== "" ? countryName.includes(nameToSearch) && regionName.includes(regionToSearch) : countryName.includes(nameToSearch)
  }) : data
  
  return(
    <div className="App">
      <Header />
      <Search 
        searchField={search} 
        searchHandler={searchHandler} 
        region={region} 
        regionHandler={regionHandler}
      />
      <DisplayCountries data={filteredCountries} />
    </div>
  )
}

export default App;
