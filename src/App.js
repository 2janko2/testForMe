import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
// import Dialogs from "./components/Dialogs/Dialogs";
// import Profile from "./components/Profile/Profile";
// import About from "./components/About/About";
// import Friends from "./components/Friends/Friends";
import ProfileContainer from "./components/Profile/ProfileContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import AboutContainer from "./components/About/AboutContainer";
import UsersC from "./components/Users/UsersContainer";
// import UsersC from "./components/Users/UsersC";

function App(props) {
    return (
        <>
            <Header />
            <Navbar />
            <Routes>
                {/* <Route
                    path="/dialogs"
                    element={<Dialogs dialogs={props.state.Dialogs} />}
                /> */}
                <Route path="/profile" element={<ProfileContainer />} />
                <Route path="/users" element={<UsersC />} />
                <Route path="/about" element={<AboutContainer />} />
                <Route path="/friends" element={<FriendsContainer />} />
            </Routes>
        </>
    );
}

export default App;
