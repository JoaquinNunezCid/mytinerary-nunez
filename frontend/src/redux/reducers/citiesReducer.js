const citiesReducer = (state = {citiesList:[]},action)=>{
    switch(action.type){
        case 'GET_ALL_CITIES':
        return{
            ...state,
            citiesList: action.payload
        }
        default:
            return state
    }
}

export default citiesReducer