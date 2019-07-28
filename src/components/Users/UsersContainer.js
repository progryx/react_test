import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers, getUsersThunkCreator,
    setCurrentPage, setLoadingStatus, setTotalUsers,
    setUsers, toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    constructor(props) { // создаем конструктор
        super(props); // передаем конструирование пропсов родителю
    }

    componentDidMount() { // элемент ЖЦ, вызывается после отрисовки компоненты.
        this.props.getUsers(this.props.currentPage, this.props.pageSize); // запрос списка пользователей
    }

    onPageChanged = (page) => { // при смене страницы запрос нового списка пользователей
        this.props.getUsers(page, this.props.pageSize);
    };

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                totalUsers={this.props.totalUsers}
                pageSize={this.props.pageSize}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress = {this.props.followingInProgress}
            />
        </>
    };
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};


export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            follow, unfollow, setUsers,
            setCurrentPage, setTotalUsers, setLoadingStatus,
            toggleFollowingProgress, getUsers
        })
)(UsersContainer);

