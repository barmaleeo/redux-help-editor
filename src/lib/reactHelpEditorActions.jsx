import ajaxGet  from 'redux-ajax-get';
import ajaxPost  from 'redux-ajax-get/dist/ajaxPost';

export const REDUX_HELP_EDITOR_INIT_REQ    = 'REDUX_HELP_EDITOR_INIT_REQ';
export const REDUX_HELP_EDITOR_INIT_DONE   = 'REDUX_HELP_EDITOR_INIT_DONE';
export const REDUX_HELP_EDITOR_INIT_ERR    = 'REDUX_HELP_EDITOR_INIT_ERR';

export const REDUX_HELP_EDITOR_SELECT_BUNDLE_REQ    = 'REDUX_HELP_EDITOR_SELECT_BUNDLE_REQ';
export const REDUX_HELP_EDITOR_SELECT_BUNDLE_DONE   = 'REDUX_HELP_EDITOR_SELECT_BUNDLE_DONE';
export const REDUX_HELP_EDITOR_SELECT_BUNDLE_ERR    = 'REDUX_HELP_EDITOR_SELECT_BUNDLE_ERR';

export const REDUX_HELP_EDITOR_SAVE_BUNDLE_REQ    = 'REDUX_HELP_EDITOR_SAVE_BUNDLE_REQ';
export const REDUX_HELP_EDITOR_SAVE_BUNDLE_DONE   = 'REDUX_HELP_EDITOR_SAVE_BUNDLE_DONE';
export const REDUX_HELP_EDITOR_SAVE_BUNDLE_ERR    = 'REDUX_HELP_EDITOR_SAVE_BUNDLE_ERR';


export const REDUX_HELP_EDITOR_EDIT_BUNDLE_PARAM    = 'REDUX_HELP_EDITOR_EDIT_BUNDLE_PARAM';
export const REDUX_HELP_EDITOR_ADD_CATEGORY         = 'REDUX_HELP_EDITOR_ADD_CATEGORY';
export const REDUX_HELP_EDITOR_HIDE_CATEGORY        = 'REDUX_HELP_EDITOR_HIDE_CATEGORY';
export const REDUX_HELP_EDITOR_REMOVE_ENTITY        = 'REDUX_HELP_EDITOR_REMOVE_ENTITY';
export const REDUX_HELP_EDITOR_ADD_CONTENT          = 'REDUX_HELP_EDITOR_ADD_CONTENT';
export const REDUX_HELP_EDITOR_ADD_ITEM_IMAGE       = 'REDUX_HELP_EDITOR_ADD_ITEM_IMAGE';
export const REDUX_HELP_EDITOR_REMOVE_ITEM_IMAGE    = 'REDUX_HELP_EDITOR_REMOVE_ITEM_IMAGE';

export const REDUX_HELP_EDITOR_UNDO    = 'REDUX_HELP_EDITOR_UNDO';
export const REDUX_HELP_EDITOR_REDO    = 'REDUX_HELP_EDITOR_REDO';


export function init(){
    return ajaxGet('/help-editor/init/', REDUX_HELP_EDITOR_INIT_REQ, {});
}

export function selectBundle(bundleId){
    return ajaxGet('/help-editor/select-bundle/', REDUX_HELP_EDITOR_SELECT_BUNDLE_REQ, {id: bundleId});
}
export function saveBundle(bundle){

    const formData = new FormData();

    const params = {id: bundle.id, children: bundle.children, options: bundle.options};

    buildFormData(formData, params);
    function buildFormData(formData, data, parentKey) {
        if (data && typeof data === 'object' &&
            !(data instanceof Date) &&
            !(data instanceof File)) {
            Object.keys(data).forEach(key => {
                if(key === 'unsaved'){
                    formData.append(parentKey +'[fileName]', data.unsaved.file.name)
                    formData.append('files[]', data.unsaved.file);
                }else if(key !== 'hide' && !key.endsWith('Initial')){
                    buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
                }
            });
        } else if(data instanceof File){
            formData.append('files[]', data);
        }else if(data !== undefined){
            formData.append(parentKey, data);
        }
    }


    return (dispatch) => {
        dispatch({type:REDUX_HELP_EDITOR_SAVE_BUNDLE_REQ, payload:{params:params}});
        window.$.ajax({
            method:'POST',
            url:'/help-editor/save-bundle/',
            processData:false,
            contentType: false,
            cache: false,
            data:formData,
            dataType:'json',
            success:(r)=>{
                if(r.status === 'ok') {
                    dispatch({
                        type: REDUX_HELP_EDITOR_SAVE_BUNDLE_DONE,
                        payload: {params: params, response: r}
                    });
                }else{
                    dispatch({type:REDUX_HELP_EDITOR_SAVE_BUNDLE_ERR,
                        payload:{params:params, response:r.msg?r.msg:r}});
                    console.log('/help-editor/save-bundle', r)
                }
            },
            error:(e)=>{
                dispatch({type:REDUX_HELP_EDITOR_SAVE_BUNDLE_ERR,
                    payload:{params:params, response:e.responseText}});
                console.log('/help-editor/save-bundle', e)
            }
        })
    };

}

export function undo(){
    return {type: REDUX_HELP_EDITOR_UNDO,}
}

export function redo(){
    return {type: REDUX_HELP_EDITOR_REDO,}
}

export function editBundleParam(path, name, content){
    return {type: REDUX_HELP_EDITOR_EDIT_BUNDLE_PARAM, payload:{path: path, name: name, content: content}}
}

export function addCategory(path){
    return {type: REDUX_HELP_EDITOR_ADD_CATEGORY, payload:{path: path,}}
}

export function addItemImage(path, file, content){
    return {type: REDUX_HELP_EDITOR_ADD_ITEM_IMAGE, payload:{path: path, file:file, content: content}}
}

export function removeItemImage(path){
    return {type: REDUX_HELP_EDITOR_REMOVE_ITEM_IMAGE, payload:{path: path,}}
}

export function removeEntity(path){
    const delPath = path.substring(0, path.length-1) + '-' + path.substring(path.length-1);
    return {type: REDUX_HELP_EDITOR_REMOVE_ENTITY, payload:{path: delPath,}}
}

export function hideCategory(path, hide){
    return {type: REDUX_HELP_EDITOR_HIDE_CATEGORY, payload:{path: path, hide: hide}}
}

export function addContent(path, type){
    return {type: REDUX_HELP_EDITOR_ADD_CONTENT, payload:{path: path, type: type}}
}



