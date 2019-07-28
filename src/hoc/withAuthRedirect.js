import React from 'react'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
});

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {


        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>

            return <Component {...this.props} />
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedRedirectComponent
}