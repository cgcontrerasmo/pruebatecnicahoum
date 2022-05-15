import { createStore, combineReducers } from "redux";
import { filters } from "./filters/reducer";

const reducers = combineReducers({
  filters,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
