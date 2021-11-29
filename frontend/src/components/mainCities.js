import React, { useState,useRef } from 'react'
import Cards from '../components/cities/Cards'

const MainCities = ( { arrayCiudades: citiesArray } )=>{

    const [ciudades,setCiudades] = useState(citiesArray)
    const [ciudadesFiltradas,setCiudadesFiltradas] = useState( {filteredCities:citiesArray} )
    const filtro = useRef()

    const filtrando = () => {
        let filteredCities = filterCities(ciudades, filtro.current.value)
        setCiudadesFiltradas({filteredCities: filteredCities})
   }
    const filterCities = (ciudades , value) => {
        let aux = value.trim()
        let filteredArray = ciudades.filter( ciudad => ciudad.city.toLowerCase().startsWith( aux.toLowerCase() ) )
        return filteredArray 
    }
    return (
        <>
                <form className="formulario" onChange={filtrando}>
                    <label>
                        <input type="text" className="filterInput" name="ciudades" ref={filtro} placeholder="Choose you're City"></input>
                    </label>
                </form>
                {
                ciudadesFiltradas.filteredCities.length > 0 
                ? ciudadesFiltradas.filteredCities.map( ciudad => <Cards key={ciudad.ciudad} city={ciudad} /> )
                : <h1>IT DOESN'T MATCH</h1>
            }
        </>
    )
}
export default MainCities