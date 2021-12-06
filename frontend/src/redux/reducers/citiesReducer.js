const initState = {
    citiesList: [],
    aux: [],
    city:[],
}

const citiesReducer = (state = initState,action)=>{
    switch(action.type){
        case 'GET_ALL_CITIES':
        return{
            ...state,
            citiesList: action.payload,
            aux: action.payload,
        }
        case "FILTER":
            const filter = action.payload.citiesList.filter(city => city.city.toLowerCase().startsWith( action.payload.value.trim().toLowerCase() ) )
            return {
                ...state,
                citiesList:filter
            }
        case "GET_A_CITY":
            return{
                ...state,
                city:action.payload.response
            }
        default:
            return state
    }
}

export default citiesReducer