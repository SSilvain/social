const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialUserState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 4,
    isFatching: false,
};

const usersReduser = (state = initialUserState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                }),
            };
        case SET_USERS: {
            return {
                ...state,
                users: [/*...state.users,*/ ...action.users],
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            };
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count,
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFatching: action.isFatching,
            };
        }
        default:
            return state;
    }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});
export const setUsersTotalCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount,
});
export const toggleIsFatching = (isFatching) => ({
    type: TOGGLE_IS_FETCHING,
    isFatching,
});

export default usersReduser;
