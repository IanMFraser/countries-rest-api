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
  const [isDark, setIsDark] = useState(false)

  const URL = `https://restcountries.eu/rest/v2/all`

  //pull data from API
  useEffect(() => {
    axios.get(URL)
      .then(res => {   
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [URL])

  //take input field text, sets search state and set filtered to true
  const searchHandler = (e) => {
    console.log(e.target.value)
    if(e.target.value === '') setFiltered(false)
    setSearch(e.target.value)
    setFiltered(true)
  }

  //take value from dropdown menu and set filtered to true
  const regionHandler = (e, r) => {
    if(r.value === '') setFiltered(false)
    setRegion(r.value);
    setFiltered(true)
  }

  //is filtered true? then display results that match, otherwise show all results
  const filteredCountries = filtered ? data.filter( country => {
    let countryName = country.name.toLowerCase()
    let nameToSearch = search.toLowerCase()
    let regionName = country.region.toLowerCase()
    let regionToSearch = region.toLowerCase()
    
    return regionToSearch !== "" ? countryName.includes(nameToSearch) && regionName.includes(regionToSearch) : countryName.includes(nameToSearch)
  }) : data
  
  //are we in dark mode? true or false
  const darkModeHandler = (e) => {
   setIsDark(e.target.checked)
  }

  return(
    <Router>
      <div className='App'>
        <Switch>
          <Route path="/country/:id">
            <CountryPage isDark={isDark} darkModeHandler={darkModeHandler} />
          </Route>
          <Route path="/">
            <HomePage
              countries={filteredCountries}
              searchField={search}
              searchHandler={searchHandler}
              region={region}
              regionHandler={regionHandler}
              isDark={isDark}
              darkModeHandler={darkModeHandler}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
