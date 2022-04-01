import axios from "axios";

import avatar from "../../assets/avatar.svg";
import loader from "../../assets/loader.svg";

import classes from "./Users.module.css";

const Users = (props) => {
    let totalPagesQuantity = Math.ceil(
        props.totalUsersCount / props.usersPerPage
    );

    let pagesBank = [];
    for (let i = 1; i <= totalPagesQuantity; i++) {
        pagesBank.push(i);
    }
    console.log(props.isFetching);
    return (
        <>
            {props.isFetching ? (
                <img src={loader} alt="#" />
            ) : (
                <>
                    <div>
                        {pagesBank.map((page) => {
                            return (
                                <span
                                    onClick={props.pageSwitcher}
                                    className={classes.page}
                                >
                                    {page}
                                </span>
                            );
                        })}
                    </div>

                    {props.users.map((user) => {
                        return (
                            <>
                                <img
                                    src={avatar}
                                    alt=""
                                    style={{ width: "100px" }}
                                />
                                <div>{user.name}</div>
                                <div> {user.username}</div>
                                <div>
                                    {user.followed ? (
                                        <>
                                            <button
                                                onClick={() =>
                                                    props.unfollow(user.id)
                                                }
                                            >
                                                Unfollow
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                props.follow(user.id);
                                            }}
                                        >
                                            Follow
                                        </button>
                                    )}
                                </div>
                            </>
                        );
                    })}
                </>
            )}
        </>
    );
};

export default Users;
