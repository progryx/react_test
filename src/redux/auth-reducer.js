//Импорты
import {authAPI} from "../api/api";
import React from "react";

// Экшены
const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_LOGOUT = 'SET_USER_LOGOUT';
const SET_CAPTCHA = 'SHOP CAPTCHA';
// Экшен-криейторы, для диспатча ( если меняется наш стейт)
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});
export const setUserLogOut = (userId, email, login, isAuth) => ({type: SET_USER_LOGOUT, payload: {userId, email, login, isAuth}});
export const setCaptcha = (captchaUrl, needCaptcha) => ({type: SET_CAPTCHA, payload: {captchaUrl, needCaptcha}});


//Санки
export const setAuth = () => dispatch => { // getauthuserdata
        authAPI.getAuthData().then(response => { // auth.me
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setCaptcha(null,false));
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const loginUser = (email, password, rememberme, captcha = undefined) => dispatch => {
        authAPI.setUserLogin(email, password, rememberme, captcha).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuth()); // при вызове другой санки в диспатче, вызываем ее через скобки
            } else if (response.resultCode === 1) {
                console.log('Bad request');
            } else {
                dispatch(getCaptcha());
            }
        })
};

export const logOut = () => dispatch => {
        authAPI.userLogOut().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserLogOut(null,null,null,false));
            } else {
                console.log('Bad request');
            }
        });
};

export const getCaptcha = () => dispatch => {
    authAPI.getAuthCaptcha().then(response => {
        dispatch(setCaptcha(response.data.url, true));
    })

};

// Начальное значение
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    needCaptcha: false,
    captchaUrl: null

};


// Главная функция
const authReducer = (state = initialState, action) => { // на входе начальное значение и входящий экшен
    // debugger;

    switch (action.type) {
        default:
            return state; // ничего не происходит, возвращает то что пришло
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_USER_LOGOUT: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_CAPTCHA: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
    return state;
};


export default authReducer;