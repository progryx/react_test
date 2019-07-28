import React from 'react';
import Profile from "./Profile";
import {addPost, getUserProfile, setUserProfile, updatePost} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component{

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
    }

    render() {
        if (!this.props.isAuth) return  <Redirect to={"/login"}  />
    return <div>
        <Profile {...this.props} profile={this.props.profile}/>
    </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect (mapStateToProps, {
        addPost, updatePost, setUserProfile, getUserProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
