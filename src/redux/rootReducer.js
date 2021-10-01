import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {appReducer} from "./appReducer";
import {errorReducer} from "./errorReduser";

export const rootReducer = combineReducers({
    posts : postsReducer,
    app : appReducer,
    error :errorReducer
})