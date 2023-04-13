import { userRoleReducer } from "./getUserRolesReducer";
import { userListReducer } from "./getUserListReducer";
import { userDetailsReducer } from "./getUserDetailsReducer";
import { postUserDetailReducer } from "./editUserDetailsReducer";
import { activateDeactivateUserReducer } from "./activateDeactivateUserReducer";
import {userDetailsByIdReducer} from './getUserDetailsByIdReducer';

export default {
  userRoleReducer,
  userListReducer,
  userDetailsReducer,
  postUserDetailReducer,
  activateDeactivateUserReducer,
  userDetailsByIdReducer
};
