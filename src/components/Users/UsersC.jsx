import axios from "axios";
import React from "react";

import Users from "./Users";

import classes from "./Users.module.css";

class UsersC extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            // .then((response) => console.log(response));
            .then((response) => this.props.setUserData(response));
    }

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                users={this.props.users}
                usersPerPage={this.props.usersPerPage}
            />
        );
    }
}

export default UsersC;
