import * as axios from "axios/index";


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "717c08d2-57a3-4c71-a39a-1a418bc58339"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }

}

export const authAPI = {
    getAuthData() {
        return instance.get(`auth/me`)
    },
    setUserLogin(email,password,rememberMe,captcha) {
        return instance.post(`auth/login`,{
            email,password,rememberMe,captcha
        })
    },
    userLogOut() {
        return instance.post(`auth/logout`);
    },
    getAuthCaptcha() {
        return instance.get(`security/get-captcha-url`);
    }
}
