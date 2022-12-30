import { combineReducers } from "redux";
import authReducers from "./auth/authReducers";

const rootReducer = combineReducers({
  auth: authReducers,
});

export default rootReducer;
