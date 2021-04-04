import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers/reactHelpEditorReducer";
import thunk from "redux-thunk";
import * as actions from "./reactHelpEditorActions";

export default function configureStoreProd(initialState) {
    const store = createStore(rootReducer, initialState,
        compose(applyMiddleware(thunk))
    );
    store.dispatch(actions.init());
    return store;
}
