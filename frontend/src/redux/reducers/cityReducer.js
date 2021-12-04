const cityReducer = (state = {city:[]},action)=>{
    switch(action.type){
        case 'GET_A_CITY':
        return{
            ...state,
            city: action.payload
        }
        default:
            return state
    }
}

export default cityReducer