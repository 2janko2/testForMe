const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USER_DATA = "SET_USER_DATA";
const SET_NEXT_PAGE = "SET_NEXT_PAGE";
const SET_IS_FETCHING = "SET_IS_FETCHING";

let initialState = {
    users: [],
    usersPerPage: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                }),
            };
        case SET_USER_DATA:
            return {
                ...state,
                users: [...state.users, ...action.userId.data],
            };
        case SET_NEXT_PAGE:
            return {
                ...state,
                users: action.data,
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            };

        default:
            return state;
    }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUserData = (userId) => ({ type: SET_USER_DATA, userId });
export const setNextPage = (data) => ({ type: SET_NEXT_PAGE, data });
export const setIsFetching = (payload) => ({ type: SET_IS_FETCHING, payload });

export default usersReducer;
