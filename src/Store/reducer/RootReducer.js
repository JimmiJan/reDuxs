import { combineReducers } from "redux";
import { CounterReducer } from "./CounterREducer";

const rootreducer = combineReducers({
    CounterReducer : CounterReducer

})
export {rootreducer}