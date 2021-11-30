import { combineReducers } from "redux";
import { typesReducer } from "./typesReducer";

const rootReducer = combineReducers({
  types: typesReducer,
});

export default rootReducer;
