import React from "react";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Redirect} from "react-router-dom";



class DefaultContainer extends React.Component {

    render() {
        if (this.props.isAuth) {
            return <Redirect to={`/profile/${this.props.userId}`}/>
        } else {
            return <Redirect to={"/login"}/>
        }
    }
}

export default compose(
    withAuthRedirect
)(DefaultContainer);