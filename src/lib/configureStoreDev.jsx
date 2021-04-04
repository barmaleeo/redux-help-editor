import rootReducer from './reducers/reactHelpEditorReducer'

import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import DevTools from './components/DevTools.jsx'
import * as actions from './reactHelpEditorActions'


export default function configureStoreDev(initialState) {
    const logger = createLogger();
    const store = createStore(rootReducer, initialState,
        compose(applyMiddleware(thunk, logger), DevTools.instrument())
    );

    store.dispatch(actions.init());
    return store;
}
