import { combineReducers } from "redux";
import authReducers from "./authReducers";
import userReducers from "./userReducers";
import masterReducers from "./mastersReducers";
import caseReducers from "./caseReducers";

export const rootReducer = combineReducers({ ...userReducers, ...authReducers, ...masterReducers, ...caseReducers });
