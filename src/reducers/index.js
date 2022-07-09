import {combineReducers} from "redux";
import {userReducer} from "./userReducer";

/* Combining the userReducer with the rootReducer. */
const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;