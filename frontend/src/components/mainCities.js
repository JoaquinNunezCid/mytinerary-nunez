import React, { useState,useRef } from 'react'
import Cards from '../components/cities/Cards'

const MainCities = ( { arrayCiudades } )=>{

    const [ciudades,setCiudades] = useState(arrayCiudades)
    const [ciudadesFiltradas,setCiudadesFiltradas] = useState( {ciudadesFiltradas:arrayCiudades} )
    const filtro = useRef()

    const filtrando = () => {
        let ciudadesFiltradas = filtrarCiudades(ciudades, filtro.current.value)
        setCiudadesFiltradas({ciudadesFiltradas})
   }
    const filtrarCiudades = (ciudades , value) => {
        let aux = value.trim()
        let arrayFiltrado = ciudades.filter( ciudad => ciudad.city.toLowerCase().startsWith( aux.toLowerCase() ) )
        return arrayFiltrado 
    }
    return (
        <>
                <form className="formulario" onChange={filtrando}>
                    <label>
                        <input type="text" className="filterInput" name="ciudades" ref={filtro} placeholder="Choose you're City"></input>
                    </label>
                </form>
                {
                ciudadesFiltradas.ciudadesFiltradas.length > 0 
                ? ciudadesFiltradas.ciudadesFiltradas.map( ciudad => <Cards key={ciudad.ciudad} city={ciudad} /> )
                : <h1>ERROR</h1>
            }
        </>
    )
}
export default MainCities