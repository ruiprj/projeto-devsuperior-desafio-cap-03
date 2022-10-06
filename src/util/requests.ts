import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import history from './history';
import jwtDecode from 'jwt-decode';

type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

export type TokenData = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

type LoginResponse = {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number,
    scope: string,
    userName: string,
    userId: number
}

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'https://movieflix-devsuperior.herokuapp.com';

const tokenKey = 'authData';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'myclientid';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_ID ?? 'myclientsecret';

type LoginData = {
    username: string;
    password: string;
}

export const requestBackendLogin = (loginData: LoginData) => {

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    }

    const data = qs.stringify({
        ...loginData,
        grant_type: 'password'
    })

    return axios({ method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data, headers })

}

export const requestBackend = (config: AxiosRequestConfig) => {
    const headers = config.withCredentials ? {
        ...config.headers,
        Authorization: 'Bearer ' + getAuthData().access_token
    } : config.headers;

    return axios({ ...config, baseURL: BASE_URL, headers });
}

export const savaAuthData = (obj: LoginResponse) => {
    localStorage.setItem(tokenKey, JSON.stringify(obj));
}

export const getAuthData = () => {
    const str = localStorage.getItem(tokenKey) ?? '{}';
    const obj = JSON.parse(str) as LoginResponse;

    return obj;
}

export const removeAuthData = () => {
    localStorage.removeItem(tokenKey);
}

// Add a request interceptor
axios.interceptors.request.use(function (config) {

    return config;

}, function (error) {

    return Promise.reject(error);

});

// Add a response interceptor
axios.interceptors.response.use(function (response) {

    return response;

}, function (error) {
    if (error.response.status === 401 || error.response.status === 403) {
        history.push('/');
    }

    return Promise.reject(error);
});

export const getTokenData = () : TokenData | undefined => {
    const loginResponse = getAuthData();

    try {
        return jwtDecode(loginResponse.access_token) as TokenData;
    } catch (error) {
        return undefined;
    }
}

export const isAuthenticated = () => {
    const tokenData = getTokenData();

    return (tokenData && tokenData.exp * 1000 > Date.now()) ? true : false;
}

export const hasAnyRoles = (roles: Role[]) : boolean => {
    if (roles.length === 0) {
        return false;
    }

    const tokenData = getTokenData();
    if (tokenData !== undefined) {
        for (var i = 0; i < roles.length; i++) {
            if (tokenData.authorities.includes(roles[i])) {
                return true;
            }
        }
    }

    return false;
}
