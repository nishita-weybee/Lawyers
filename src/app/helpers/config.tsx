export const AUTH_BASE_URL = `/Auth`;
export const USER_BASE_URL = `/User`;

export const USER_ROLES = `${AUTH_BASE_URL}/Roles`;
export const GET_USER_BY_ACCESSTOKEN = `${AUTH_BASE_URL}/verify_token`;
export const LOGIN = `${AUTH_BASE_URL}/Login`;
export const REGISTER = `${AUTH_BASE_URL}/RegisterUser`;
export const FORGOT_PASSWORD = `${AUTH_BASE_URL}/ForgotPassword`;
export const RESET_PASSWORD = `${AUTH_BASE_URL}/ResetPassword`;

export const USER_LIST = `${USER_BASE_URL}/GetAllUsersDetails`;
export const USER_DETAILS = `${USER_BASE_URL}/GetUserDetails`;
export const EDIT_USER_DETAILS = `${USER_BASE_URL}/EditUserDetails`;
export const ACTIVATE_DEACTIVATE_USER = `${USER_BASE_URL}/ActiveDeactivateUserAccount`;
