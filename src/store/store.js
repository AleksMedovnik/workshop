import { combineReducers, createStore } from "redux";
import level_1_Red from "./reducers/level_1_Red";

let reducers = combineReducers({
    level_1: level_1_Red
});

const store = createStore(reducers);
window.store = store;
export default store;