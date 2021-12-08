import React, { useEffect } from 'react'
import Cards from '../components/cities/Cards'
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions"
import { Link } from 'react-router-dom';

const MainCities = (props)=>{
    const auxiliar = props.aux
    const filtrar = props.filter
    useEffect(() => {
        props.getCities()
    }, [])


    return (
        <>
                <div className="filterInput">
                    <input type="text" placeholder="Choose you're City" onChange={(evento)=>filtrar(auxiliar,evento.target.value)}></input>
                </div>
                {
                props.allCities.length > 0 
                ? props.allCities.map( ciudad =>
                <Link to={`/Cities/${ciudad.id}`}>
                <Cards key={ciudad.ciudad} city={ciudad}/>
                </Link>
                )
                : <h1>IT DOESN'T MATCH</h1>
            }
        </>
    )
}

const mapStateToProps = (state) =>{
    return{
        allCities : state.citiesReducer.citiesList,
        aux: state.citiesReducer.aux
    } 
  }
  const mapDispatchToProps = {
    getCities:citiesActions.getAllCities,
    filter:citiesActions.filterCities
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(MainCities)
