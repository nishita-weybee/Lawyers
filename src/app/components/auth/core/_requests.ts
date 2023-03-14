import axios from 'axios';
import { UserModel } from './_models';

// const API_URL = process.env.VITE_REACT_APP_API_URL_AUTH
const API_URL = 'http://localhost:5000/api/Auth'

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const LOGIN_URL = `${API_URL}/login`
export const REGISTER_URL = `${API_URL}/register`
export const REGISTER_ADMIN = `${API_URL}/register-admin`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post(LOGIN_URL, {
    email,
    password,
  })
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation?: string
) {
  return axios.post(REGISTER_URL, {
    email: email,
    firstName: firstname,
    lastName: lastname,
    password: password,
    // password_confirmation: password_confirmation,
  })
}

export function registerAdmin(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
) {
  return axios.post(REGISTER_ADMIN, {
    email: email,
    firstName: firstname,
    lastName: lastname,
    password: password,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(token: string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  })
}
