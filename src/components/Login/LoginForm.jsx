import React from 'react';
import login from './login.module.css';
import {Field} from "redux-form";


export const LoginForm = (props) => {
    return (
        <form action="" className={login.form} onSubmit={props.handleSubmit}>
            <h1 className={login.header}>{'Please sign in'}</h1>
            <label htmlFor="inputEmail" className={login.email_label}>{'Email address'}</label>
            <Field component={"input"} name={"email"} type="email" id="inputEmail" className={login.email_input + ' form-control'}
                   placeholder="Email address" required="" autoFocus=""/>
            <label htmlFor="inputPassword" className={login.pass_label}>{'Password'}</label>
            <Field component={"input"} name={"password"} type="password" id="inputPassword" className={login.password_input + ' form-control'}
                   placeholder="Password" required=""/>
            <div className={login.checkbox}>
                <label>
                    <Field component={"input"} name={"rememberMe"} type="checkbox" value="remember-me"/>{'Remember me'}
                </label>
            </div>
            {props.needCaptcha && <div><img src={props.captchaUrl} alt=""/> <Field component={"input"} name={"captcha"} type="text" /></div> }
            <button className="btn btn-lg btn-primary btn-block" type="submit">{'Sign in'}</button>
        </form>
    );
};
