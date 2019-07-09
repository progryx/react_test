import React from 'react';
import login from './login.module.css';

const Login = (props) => {
    return (
        <form action="" className={login.form}>
                <h1 className={login.header}>{'Please sign in'}</h1>
                <label htmlFor="inputEmail" className={login.email_label}>{'Email address'}</label>
                <input type="email" id="inputEmail" className={login.email_input + ' form-control' } placeholder="Email address" required="" autoFocus=""/>
                    <label htmlFor="inputPassword" className={login.pass_label}>{'Password'}</label>
                    <input type="password" id="inputPassword" className={login.password_input + ' form-control' } placeholder="Password" required=""/>
                        <div className={login.checkbox}>
                            <label>
                                <input type="checkbox" value="remember-me"/>{'Remember me'}
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">{'Sign in'}</button>
        </form>
    )
}

export default Login;