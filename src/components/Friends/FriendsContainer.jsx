import { connect } from "react-redux";

import { changeClick } from "../redux/friendsReducer";
import Friends from "./Friends";

const mapStateToProps = (state) => {
    return {
        friends: state.Friends,
    };
};

const FriendsContainer = connect(mapStateToProps, { changeClick })(Friends);

export default FriendsContainer;
