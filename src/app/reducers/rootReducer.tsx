import { combineReducers } from "redux";
// import authReducer from "./authReducers";
import userReducer from "./userReducer";
export const rootReducer = combineReducers({ ...userReducer });
