const ADD_NEW_ABOUT = "ADD-NEW-ABOUT";

let initialState = [
    {
        title: "About",
        icon: "Out icon",
        description:
            "Omnis, perspiciatis corporis. Doloremque laborum totam sint qui quos nulla odio iusto dolor inventore corporis ear",
        likesCount: 10,
    },
    {
        title: "About",
        icon: "Out icon",
        description:
            "Omnis, perspiciatis corporis. Doloremque laborum totam sint qui quos nulla odio iusto dolor inventore corporis ear",
        likesCount: 10,
    },
    {
        title: "About",
        icon: "Out icon",
        description:
            "Omnis, perspiciatis corporis. Doloremque laborum totam sint qui quos nulla odio iusto dolor inventore corporis ear",
        likesCount: 10,
    },
];

const aboutReducer = (state = initialState, action) => {
    if (action.type === ADD_NEW_ABOUT) {
        let aboutDataItem = {
            title: action.title,
            message: "Hey hey!",
        };
        let copyState = [...state];
        copyState.push(aboutDataItem);
        return copyState;
    }
    return state;
};

export const changeClick = (title) => {
    return {
        type: ADD_NEW_ABOUT,
        title: title,
    };
};

export default aboutReducer;
