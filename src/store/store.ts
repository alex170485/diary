import {applyMiddleware, combineReducers, createStore} from "redux";
import {WeatherReducer} from "../Reducers/WeaterReducer";
import thunkMiddlware from 'redux-thunk'



let RootReducer = combineReducers({
    weather: WeatherReducer
})
export type RootStateReduxType = ReturnType<typeof RootReducer>
export type StoreReduxType = ReturnType <typeof RootReducer>


let store = createStore(RootReducer, applyMiddleware(thunkMiddlware))


//@ts-ignore
window.store = store

export default store