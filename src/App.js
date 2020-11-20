import React, { useState, useEffect }  from 'react';
import './App.css';
import axios from 'axios';
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryPage from './components/CountryPage'
import Header from './components/Header';

const App = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')
  const [filtered, setFiltered] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const URL = `https://restcountries.eu/rest/v2/all`
  const DARK_CLASS = "dark"

  //pull data from API
  useEffect(() => {
    const fetchData = async () => {
      try{
        const result = await axios.get(URL);
        setData(result.data)
      } catch (error) {
          console.log(error)
        }
    }
    fetchData()
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

  //when isDark state changes value, change the CSS class to dark mode
  useEffect(() => {
      if(isDark) {
          document.documentElement.classList.add(DARK_CLASS)
      } else {
          document.documentElement.classList.remove(DARK_CLASS)
      }
  }, [isDark])

  return(
    <Router>
      <div className='App'>
        <Header isDark={isDark} darkModeHandler={darkModeHandler}/>
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
