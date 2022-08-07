import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {themeReducer} from "./themeReducer";

/* Combining the userReducer with the rootReducer. */
const rootReducer = combineReducers({
    user: userReducer,
    darkTheme: themeReducer,
});

export default rootReducer;