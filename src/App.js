import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryPage from './components/CountryPage'

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
    <Router>
      <div className="App">
        <Switch>
          <Route path="/country/:id">
            <CountryPage />
          </Route>
          <Route path="/">
            <HomePage
              countries={filteredCountries}
              searchField={search}
              searchHandler={searchHandler}
              region={region}
              regionHandler={regionHandler}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
