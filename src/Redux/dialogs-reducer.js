const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialDialogsState = {
    messages: [
        {message: "Hello", id: 0},
        {message: "Hi", id: 2},
        {message: "Good", id: 3}
    ],
    dialogs: [
        {name: "Vasya", id: 1},
        {name: "Vera", id: 2},
        {name: "Valya", id: 3}
    ],
    newMessageBody: "",
}
const dialogsReducer = (state = initialDialogsState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 33, message: body}],
                newMessageBody: ""
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
});

export default dialogsReducer;
