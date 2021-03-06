import dialogsReducer from "./dialogs-reducer";
import profilereducer from "./profile-reducer";

let Store = {
    _callSubscriber() {},
    setSubscribe(reRender) {
        this._callSubscriber = reRender;
    },
    _state: {
        profilePage: {
            posts: [
                { text: "Post 1", id: 1, like: 324 },
                { text: "Post 2", id: 2, like: 88 },
                { text: "Post 3", id: 3, like: 2 },
            ],
            newPostText: "S.Y.Studio",
        },
        messagesPage: {
            messages: [
                { message: "Hello", id: 0 },
                { message: "Hi", id: 2 },
                { message: "Good", id: 3 },
            ],
            dialogs: [
                { name: "Vasya", id: 1 },
                { name: "Vera", id: 2 },
                { name: "Valya", id: 3 },
            ],
            textNewMessage: "Enter New Massage",
        },
        navbar: {
            friends: [
                { nameFriend: "Polya", id: 1 },
                { nameFriend: "Zoya", id: 2 },
                { nameFriend: "Zhanna", id: 3 },
            ],
        },
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profilereducer(
            this._state.profilePage,
            action
        );
        this._state.messagesPage = dialogsReducer(
            this._state.messagesPage,
            action
        );
        this._callSubscriber(this._state);
    },
};

export default Store;
