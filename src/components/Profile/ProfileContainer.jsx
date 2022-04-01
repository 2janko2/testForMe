import Profile from "./Profile";
import { showAlert } from "../redux/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        profile: state.ProfileData,
    };
};

const ProfileContainer = connect(mapStateToProps, { showAlert })(Profile);

export default ProfileContainer;
