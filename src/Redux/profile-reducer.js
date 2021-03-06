const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialProfileState = {
    posts: [
        {text: "Post 1", id: 1, like: 324},
        {text: "Post 2", id: 2, like: 88},
        {text: "Post 3", id: 3, like: 2},
    ],
    newPostText: "",
}

const profileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                text: state.newPostText,
                id: 5,
                like: Math.floor(Math.random() * 32),
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (textTmp) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: textTmp,
});
export default profileReducer;
