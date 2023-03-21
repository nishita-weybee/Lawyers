export const AUTH_BASE_URL = `http://192.168.1.11/api/Auth`;
export const USER_BASE_URL = `http://192.168.1.11/api/User`;

export const LOGIN_API_URL = `${AUTH_BASE_URL}/Login`;
export const USER_ROLES = `${AUTH_BASE_URL}/Roles`;

export const USER_LIST = `${USER_BASE_URL}/GetAllUsersDetails`;
export const USER_DETAILS = `${USER_BASE_URL}/GetUserDetails`;
export const EDIT_USER_DETAILS = `${USER_BASE_URL}/EditUserDetails`;
export const ACTIVATE_DEACTIVATE_USER = `${USER_BASE_URL}/ActiveDeactivateUserAccount`;
