import {combineReducers, createStore} from "redux";
import messagesPageReducer from "./messagesPage-reducer";
import profilePageReducer from "./profilePage-reducer";
import sidebarsReducer from "./sidebars-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage:profilePageReducer,
    messagesPage:messagesPageReducer,
    sidebars:sidebarsReducer,
    usersPage:usersReducer
});
let store = createStore(reducers);
export default store;
