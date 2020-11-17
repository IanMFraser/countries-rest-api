import React from 'react'
import Header from './Header'
import { useHistory, withRouter } from 'react-router-dom'
import DisplayBorderCountries from './DisplayBorderCountries'

const CountryPage = ({ location }) => {
    const data = location.state.countryData
    let history = useHistory()
   
    const handleClick = () => {
        history.push("/")
    }

    return(
        <div className="CountryPage">
            <Header />
            <button className="back-button" type="button" onClick={handleClick}> {`<-- Back`} </button>
            <div className="countrypage-container">
                <div className="flag-container">
                    <img src={`${data.flag}`} alt="flag"/>
                </div>
                <div className="countrypage-data">
                    <h2>{data.name}</h2>
                    <div className="countrypage-info">
                        <div className="left-col">
                            <p><span className="bold">Native Name: </span>{`${data.nativeName}`}</p>
                            <p><span className="bold">Population: </span>{`${data.population}`}</p>
                            <p><span className="bold">Region: </span>{`${data.region}`}</p>
                            <p><span className="bold">Sub Region: </span>{`${data.subregion}`}</p>
                            <p><span className="bold">Captial: </span>{`${data.capital}`}</p>
                        </div>
                        <div className="right-col">
                            <p><span className="bold">Top Level Domain: </span>{`${data.topLevelDomain}`}</p>
                            <p><span className="bold">Currencies: </span>{`${data.currencies.map(curr => curr.name)} `} </p>
                            <p><span className="bold">Languages: </span>{`${data.languages.map(lan => lan.name)} `} </p>
                        </div>
                    </div>
                    <div className="countrypage-links">
                       { data.borders.length > 0 ? <div><span className="bold">Border Countries: </span><DisplayBorderCountries borders={data.borders}/></div> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CountryPage)