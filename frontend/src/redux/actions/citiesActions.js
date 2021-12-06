import axios from 'axios'

const citiesActions = {
    getAllCities: ()=>{
        return async (dispatch) => {
            let respuesta = await axios.get('http://localhost:4000/api/cities')
            let data = respuesta.data.response
            dispatch({type: 'GET_ALL_CITIES', payload: data})
        }
    },
    filterCities: (citiesList, value)=>{
        return (dispatch)=>{
            dispatch({type:'FILTER', payload:{citiesList, value}})
        }
    },
    getACity: (id) =>{
        return (dispatch)=>{
            axios.get(`http://localhost:4000/api/cities/`+id)
            .then (response=> dispatch({type: 'GET_A_CITY', payload:response.data}))
        }
    },
}

export default citiesActions