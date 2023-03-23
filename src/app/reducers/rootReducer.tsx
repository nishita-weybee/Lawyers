import { combineReducers } from "redux";
import authReducers from "./authReducers";
import userReducers from "./userReducers";
import masterReducers from "./mastersReducers";

export const rootReducer = combineReducers({ ...userReducers, ...authReducers, ...masterReducers });
