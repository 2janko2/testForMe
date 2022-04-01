import { combineReducers, createStore } from "redux";
import aboutReducer from "./aboutReducer";
import friendsReducer from "./friendsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    ProfileData: profileReducer,
    AboutData: aboutReducer,
    Friends: friendsReducer,
    Users: usersReducer,
});


let store = createStore(reducers);
window.store = store;

export default store;
