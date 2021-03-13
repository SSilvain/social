import Users from "./Users";
import { connect } from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsersTotalCount,
    setUsers,
    unfollow,
    toggleIsFatching
} from "../../Redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Preloader from "./../common/Preloader/Preloader"

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFatching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFatching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFatching(true);
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFatching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
            <div>{this.props.isFatching ? <Preloader /> : null}</div>
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFatching: state.usersPage.isFatching
    }
}

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        toggleIsFatching
    }
)(UsersContainer);