import { combineReducers, createStore } from "redux";

import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReduser from "./users-reducer";
import authReduser from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReduser,
    auth: authReduser,
});

let store = createStore(reducers);
window.store = store;

export default store;
