import {combineReducers} from "redux";
import init from "./initReducer";
import bundle from "./bundleReducer";


export default combineReducers({
    init,
    bundle
})