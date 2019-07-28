//Импорты
import {usersAPI} from "../api/api";

// Экшены
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

// Экшен-криейторы
export const followSuccess = (userId) => ({type: FOLLOW, userId}); // флаг подписки
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId}); // флаг отписки
export const setUsers = (users) => ({type: SET_USERS, users}); // установить пользователей
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsers = (count) => ({type: SET_TOTAL_USERS, count});
export const setLoadingStatus = (status) => ({type: SET_LOADING_STATUS, status});
export const toggleFollowingProgress = (status, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, status, userId}); // флаг процесса подписки


// Thunks (преобразователи)

export const getUsers = (currentPage, pageSize) => { // получить всех пользователей на странице
    return (dispatch) => {
        dispatch(setLoadingStatus(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            // debugger;
            dispatch(setUsers(data.items));
            dispatch(setTotalUsers(data.totalCount));
            dispatch(setLoadingStatus(false));
        });
    }
};

export const follow = (userId) => { // функция подписки
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        // debugger;
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(followSuccess(userId));
                dispatch(toggleFollowingProgress(false, userId));
            }
        })
    }
};

export const unfollow = (userId) => { // функция отписки
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(unfollowSuccess(userId));
                dispatch(toggleFollowingProgress(false, userId));
            }
        })
    }
};

// Начальное значение
let initialState = {
    users: [],
    pageSize: 5, // размер страницы ( количество выводимых элементов )
    totalUsers: 0, // общее количество пользователей
    currentPage: 1, // текущая страница
    isFetching: false,
    // Разделив общее количество пользователей на размер страницы, мы узнаем сколько всего страниц
    followingInProgress: []
};


// Главная функция
const usersReducer = (state = initialState, action) => { // на входе начальное значение и входящий экшен
    switch (action.type) {
        default:
            return state; // ничего не происходит, возвращает то что пришло
        case FOLLOW: {
            // debugger;
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            //debugger;
            //let nextUsers = action.users;
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            //debugger;
            //let nextUsers = action.users;
            return {...state, currentPage: action.page}
        }
        case SET_TOTAL_USERS: {
            //debugger;
            //let nextUsers = action.users;
            return {...state, totalUsers: action.count}
        }
        case SET_LOADING_STATUS: {
            return {...state, isFetching: action.status}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.status
                    ? [...state.followingInProgress, action.userId] // делаем копию и добавляем элемент из экшена в конец
                    : state.followingInProgress.filter(id => id != action.userId) // фильтрация возвращает новый массив, копия не нужна
            }
        }
    }
    return state;
};

export default usersReducer;