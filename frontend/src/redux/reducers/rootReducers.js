import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itineraryReducer";

const rootReducer = combineReducers({
    citiesReducer:citiesReducer,
    itineraryReducer:itineraryReducer,
})

export default rootReducer