const ADD_PROFILE_DATA_ITEM = "ADD-PROFILE-DATA-ITEM";

let initialState = [
    {
        title: "My Profile",
        icon: "My icon",
        description:
            "Omnis, perspiciatis corporis. Doloremque laborum totam sint qui quos nulla odio iusto dolor inventore corporis ear",
        likesCount: 10,
    },
    {
        title: "My Profile",
        icon: "My icon",
        description:
            "Omnis, perspiciatis corporis. Doloremque laborum totam sint qui quos nulla odio iusto dolor inventore corporis ear",
        likesCount: 10,
    },
    {
        title: "My Profile",
        icon: "My icon",
        description:
            "Omnis, perspiciatis corporis. Doloremque laborum totam sint qui quos nulla odio iusto dolor inventore corporis ear",
        likesCount: 10,
    },
];

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROFILE_DATA_ITEM:
            let profileDataItem = {
                title: "MyProfile",
                icon: "My Icon",
                description: action.profileMessage,
                likesCount: 0,
            };
            let stateCopy = [...state];
            stateCopy.push(profileDataItem);
            return stateCopy;

        default:
            return state;
    }
};

export const showAlert = (showText) => ({
    type: ADD_PROFILE_DATA_ITEM,
    profileMessage: showText,
});

export default profileReducer;
