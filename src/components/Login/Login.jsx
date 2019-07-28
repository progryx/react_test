import React from 'react';
import {connect} from "react-redux";
import {LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";
import {loginUser} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
    const onSubmit = (data) => {
        let remember_me = data.rememberMe ? data.rememberMe : false;
        props.loginUser(data.email,data.password, remember_me, data.captcha);
    };

    if (props.isAuth) return <Redirect to={`/profile/${props.userId}`} />

    return (
        <LoginReduxForm
            {...props}
            onSubmit={onSubmit}
            needCaptcha={props.needCaptcha}
            captchaUrl={props.captchaUrl}
        />
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        needCaptcha: state.auth.needCaptcha,
        captchaUrl: state.auth.captchaUrl,
        userId: state.auth.userId
    }
};

 export default connect(mapStateToProps,{loginUser})(Login);

