import { connect } from "react-redux";

import { changeClick } from "../redux/aboutReducer";
import About from "./About";

const mapStateToProps = (state) => {
    console.log(state);
    return {
        about: state.AboutData,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeClick: (value) => {
//             dispatch(addNewAboutActionCreator(value));
//         },
//     };
// };

const AboutContainer = connect(mapStateToProps, {changeClick})(About);

export default AboutContainer;
