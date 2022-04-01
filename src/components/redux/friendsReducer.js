const ADD_NEW_FRIEND = "ADD-NEW-FRIEND";

let initialState = {
    friendsBlock: [
        { name: "Adrew", message: "Hello from Dimych" },
        { name: "Sasha", message: "How are you doing?" },
        { name: "Peter", message: "Don't bother me" },
        { name: "Memsy", message: "Let me know, how it's going" },
    ],
    friendsString: "",
};

window.initialState = initialState;

const friendsReducer = (state = initialState, action) => {
    if (action.type === ADD_NEW_FRIEND) {
        let friendsDataItem = {
            name: action.title,
            message: "Hey hey!",
        };

        return {
            ...state,
            friendsBlock: [...state.friendsBlock, friendsDataItem],
        };
    }
    return state;
};

export const changeClick = (title) => {
    return {
        type: ADD_NEW_FRIEND,
        title: title,
    };
};

export default friendsReducer;
