import {
    REDUX_HELP_EDITOR_INIT_DONE,
    REDUX_HELP_EDITOR_INIT_ERR,
    REDUX_HELP_EDITOR_INIT_REQ
} from "../reactHelpEditorActions";

const initialState = {
    loading: true,
    error: false,
    msg: false,
    bundles: [],
};

export default function (state = initialState, action) {
    const pl = action.payload;
    let ns = state;
    switch (action.type) {
        case REDUX_HELP_EDITOR_INIT_REQ:{
            ns = {...ns, loading: true, error: false, msg: false};
            break;
        }
        case REDUX_HELP_EDITOR_INIT_DONE:{
            ns = {...ns,  bundles: pl.response.bundles, loading: false,};
            break;
        }
        case REDUX_HELP_EDITOR_INIT_ERR:{
            ns = {...ns,  msg: pl.response, error: true, loading: false,};
            break;
        }
        default:

    }
    return ns;
}