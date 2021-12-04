import axios from 'axios'

const citiesActions = {
    getAllCities: ()=>{
        return async (dispatch) => {
            let respuesta = await axios.get('http://localhost:4000/api/cities')
            let data = respuesta.data.response
            dispatch({type: 'GET_ALL_CITIES', payload: data})
        }
    }
}

export default citiesActions