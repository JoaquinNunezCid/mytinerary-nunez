import axios from 'axios'

const cityActions = {
    getCity: ()=>{
        return async (dispatch) => {
            let respuesta = await axios.get('http://localhost:4000/api/cities/')
            let data = respuesta.data.response
            dispatch({type: 'GET_A_CITY', payload: data})
        }
    }
}

export default cityActions