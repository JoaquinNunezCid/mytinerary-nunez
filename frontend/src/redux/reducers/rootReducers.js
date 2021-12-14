import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itineraryReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    citiesReducer:citiesReducer,
    itineraryReducer:itineraryReducer,
    users: usersReducer,
})

export default rootReducer