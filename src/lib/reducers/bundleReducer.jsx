import changeNestedParam from "change-nested-param";
import {
    REDUX_HELP_EDITOR_ADD_CATEGORY,
    REDUX_HELP_EDITOR_ADD_CONTENT,
    REDUX_HELP_EDITOR_ADD_ITEM_IMAGE,
    REDUX_HELP_EDITOR_EDIT_BUNDLE_PARAM,
    REDUX_HELP_EDITOR_HIDE_CATEGORY, REDUX_HELP_EDITOR_REDO,
    REDUX_HELP_EDITOR_REMOVE_ENTITY,
    REDUX_HELP_EDITOR_REMOVE_ITEM_IMAGE,
    REDUX_HELP_EDITOR_SAVE_BUNDLE_DONE,
    REDUX_HELP_EDITOR_SAVE_BUNDLE_ERR,
    REDUX_HELP_EDITOR_SAVE_BUNDLE_REQ,
    REDUX_HELP_EDITOR_SELECT_BUNDLE_DONE,
    REDUX_HELP_EDITOR_SELECT_BUNDLE_ERR,
    REDUX_HELP_EDITOR_SELECT_BUNDLE_REQ, REDUX_HELP_EDITOR_UNDO
} from "../reactHelpEditorActions";


const initialState = {
    loading: false,
    error: false,
    msg: false,
    id: 0,
    items: [],
    options:{},
    history: [],
    historyPoint: -1,
};


export default function bundleReducer (state = initialState, action) {
    const pl = action.payload;
    let ns = state;
    switch (action.type) {
        case REDUX_HELP_EDITOR_SELECT_BUNDLE_REQ:{
            ns = {...ns, history: [], historyPoint: -1, loading: true, error: false, msg: false};
            break;
        }
        case REDUX_HELP_EDITOR_SELECT_BUNDLE_DONE:{
            ns = {...ns, ...pl.response.bundle, loading: false,};
            break;
        }
        case REDUX_HELP_EDITOR_SELECT_BUNDLE_ERR:{
            ns = {...ns,  msg: pl.response, error: true, loading: false,};
            break;
        }
        case REDUX_HELP_EDITOR_EDIT_BUNDLE_PARAM:{
            let path;
            if(pl.path){
                path = pl.path + '.options.';
            }else{
                path = 'options.';
            }
            ns = changeNestedParam(ns, path + pl.name, pl.content, {createUndefined: true, keepInitial: true})
            addHistory(ns, state)
            break;
        }
        case REDUX_HELP_EDITOR_ADD_CATEGORY:{
            ns = changeNestedParam(ns, pl.path, {id:0, options:{name: 'Новая категория'}}, {createUndefined: true})
            addHistory(ns, state)
            break;
        }
        case REDUX_HELP_EDITOR_HIDE_CATEGORY:{
            ns = changeNestedParam(ns, pl.path + '.hide', pl.hide, {createUndefined: true})
            break;
        }
        case REDUX_HELP_EDITOR_REMOVE_ENTITY:{
            ns = changeNestedParam(ns, pl.path)
            addHistory(ns, state)
            break;
        }
        case REDUX_HELP_EDITOR_ADD_ITEM_IMAGE:{
            ns = changeNestedParam(ns, pl.path + '.options.unsaved', {file: pl.file, content: pl.content}, {createUndefined: true})
            addHistory(ns, state)
            break;
        }
        case REDUX_HELP_EDITOR_REMOVE_ITEM_IMAGE:{
            ns = changeNestedParam(ns, pl.path + '.options.-unsaved', null)
            addHistory(ns, state)
            break;
        }
        case REDUX_HELP_EDITOR_ADD_CONTENT:{
            let content;
            if(pl.type === 'text'){
                content = {id:0, type: 0, options:{text: "Lorem Ipsum..."}}
            }else if(pl.type === 'picture'){
                content = {id:0, type: 1, options:{descr: "Описание изображения"}}
            }
            if(content){
                ns = changeNestedParam(ns, pl.path, content, {createUndefined: true})
                addHistory(ns, state)
            }
            break;
        }
        case REDUX_HELP_EDITOR_SAVE_BUNDLE_REQ:{
            ns = {...ns, saveProgress: true, saveError: false, saveMsg: false}
            break;
        }
        case REDUX_HELP_EDITOR_SAVE_BUNDLE_DONE:{
            ns = {...ns, saveProgress: false, history: [], historyPoint: -1, ...pl.response.bundle,}
            break;
        }
        case REDUX_HELP_EDITOR_SAVE_BUNDLE_ERR:{
            ns = {...ns, saveProgress: false, saveError: true, saveMsg: pl.response.msg}
            break;
        }
        case REDUX_HELP_EDITOR_UNDO: {
            const h = ns.history[ns.historyPoint];
            if(h){
                ns = {...ns, id: h.id, options: h.options, children: h.children, historyPoint: ns.historyPoint - 1,}
            }
            break;
        }
        case REDUX_HELP_EDITOR_REDO:{
            const h = ns.history[ns.historyPoint + 1];
            if(h){
                ns = {...ns, id: h.id, options: h.options, children: h.children, historyPoint: ns.historyPoint + 1,}
            }
            break;
        }
        default:

    }
    return ns;
}

export function addHistory(state, oldState = {}){
    if(state !== oldState) {
        state.history = state.history.slice()
        if (state.historyPoint < state.history.length - 1) {
            state.history.splice(state.historyPoint + 1, state.history.length - state.historyPoint);
        }
        state.history.push({id: oldState.id, options: oldState.options, children: oldState.children,})
        state.historyPoint++;
    }
}
