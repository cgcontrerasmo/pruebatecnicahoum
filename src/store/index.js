import { createStore, combineReducers } from "redux";
import { filters } from "./filters/reducer";

const reducers = combineReducers({
  filters,
});

const store = createStore(reducers);
export default store;
