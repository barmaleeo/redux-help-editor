"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.selectBundle = selectBundle;
exports.saveBundle = saveBundle;
exports.undo = undo;
exports.redo = redo;
exports.editBundleParam = editBundleParam;
exports.addCategory = addCategory;
exports.addItemImage = addItemImage;
exports.removeItemImage = removeItemImage;
exports.removeEntity = removeEntity;
exports.disableEntity = disableEntity;
exports.hideCategory = hideCategory;
exports.addContent = addContent;
exports.REDUX_HELP_EDITOR_REDO = exports.REDUX_HELP_EDITOR_UNDO = exports.REDUX_HELP_EDITOR_REMOVE_ITEM_IMAGE = exports.REDUX_HELP_EDITOR_ADD_ITEM_IMAGE = exports.REDUX_HELP_EDITOR_ADD_CONTENT = exports.REDUX_HELP_EDITOR_REMOVE_ENTITY = exports.REDUX_HELP_EDITOR_DISABLE_ENTITY = exports.REDUX_HELP_EDITOR_HIDE_CATEGORY = exports.REDUX_HELP_EDITOR_ADD_CATEGORY = exports.REDUX_HELP_EDITOR_EDIT_BUNDLE_PARAM = exports.REDUX_HELP_EDITOR_SAVE_BUNDLE_ERR = exports.REDUX_HELP_EDITOR_SAVE_BUNDLE_DONE = exports.REDUX_HELP_EDITOR_SAVE_BUNDLE_REQ = exports.REDUX_HELP_EDITOR_SELECT_BUNDLE_ERR = exports.REDUX_HELP_EDITOR_SELECT_BUNDLE_DONE = exports.REDUX_HELP_EDITOR_SELECT_BUNDLE_REQ = exports.REDUX_HELP_EDITOR_INIT_ERR = exports.REDUX_HELP_EDITOR_INIT_DONE = exports.REDUX_HELP_EDITOR_INIT_REQ = void 0;

var _reduxAjaxGet = _interopRequireDefault(require("redux-ajax-get"));

var _ajaxPost = _interopRequireDefault(require("redux-ajax-get/dist/ajaxPost"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REDUX_HELP_EDITOR_INIT_REQ = 'REDUX_HELP_EDITOR_INIT_REQ';
exports.REDUX_HELP_EDITOR_INIT_REQ = REDUX_HELP_EDITOR_INIT_REQ;
var REDUX_HELP_EDITOR_INIT_DONE = 'REDUX_HELP_EDITOR_INIT_DONE';
exports.REDUX_HELP_EDITOR_INIT_DONE = REDUX_HELP_EDITOR_INIT_DONE;
var REDUX_HELP_EDITOR_INIT_ERR = 'REDUX_HELP_EDITOR_INIT_ERR';
exports.REDUX_HELP_EDITOR_INIT_ERR = REDUX_HELP_EDITOR_INIT_ERR;
var REDUX_HELP_EDITOR_SELECT_BUNDLE_REQ = 'REDUX_HELP_EDITOR_SELECT_BUNDLE_REQ';
exports.REDUX_HELP_EDITOR_SELECT_BUNDLE_REQ = REDUX_HELP_EDITOR_SELECT_BUNDLE_REQ;
var REDUX_HELP_EDITOR_SELECT_BUNDLE_DONE = 'REDUX_HELP_EDITOR_SELECT_BUNDLE_DONE';
exports.REDUX_HELP_EDITOR_SELECT_BUNDLE_DONE = REDUX_HELP_EDITOR_SELECT_BUNDLE_DONE;
var REDUX_HELP_EDITOR_SELECT_BUNDLE_ERR = 'REDUX_HELP_EDITOR_SELECT_BUNDLE_ERR';
exports.REDUX_HELP_EDITOR_SELECT_BUNDLE_ERR = REDUX_HELP_EDITOR_SELECT_BUNDLE_ERR;
var REDUX_HELP_EDITOR_SAVE_BUNDLE_REQ = 'REDUX_HELP_EDITOR_SAVE_BUNDLE_REQ';
exports.REDUX_HELP_EDITOR_SAVE_BUNDLE_REQ = REDUX_HELP_EDITOR_SAVE_BUNDLE_REQ;
var REDUX_HELP_EDITOR_SAVE_BUNDLE_DONE = 'REDUX_HELP_EDITOR_SAVE_BUNDLE_DONE';
exports.REDUX_HELP_EDITOR_SAVE_BUNDLE_DONE = REDUX_HELP_EDITOR_SAVE_BUNDLE_DONE;
var REDUX_HELP_EDITOR_SAVE_BUNDLE_ERR = 'REDUX_HELP_EDITOR_SAVE_BUNDLE_ERR';
exports.REDUX_HELP_EDITOR_SAVE_BUNDLE_ERR = REDUX_HELP_EDITOR_SAVE_BUNDLE_ERR;
var REDUX_HELP_EDITOR_EDIT_BUNDLE_PARAM = 'REDUX_HELP_EDITOR_EDIT_BUNDLE_PARAM';
exports.REDUX_HELP_EDITOR_EDIT_BUNDLE_PARAM = REDUX_HELP_EDITOR_EDIT_BUNDLE_PARAM;
var REDUX_HELP_EDITOR_ADD_CATEGORY = 'REDUX_HELP_EDITOR_ADD_CATEGORY';
exports.REDUX_HELP_EDITOR_ADD_CATEGORY = REDUX_HELP_EDITOR_ADD_CATEGORY;
var REDUX_HELP_EDITOR_HIDE_CATEGORY = 'REDUX_HELP_EDITOR_HIDE_CATEGORY';
exports.REDUX_HELP_EDITOR_HIDE_CATEGORY = REDUX_HELP_EDITOR_HIDE_CATEGORY;
var REDUX_HELP_EDITOR_DISABLE_ENTITY = 'REDUX_HELP_EDITOR_DISABLE_ENTITY';
exports.REDUX_HELP_EDITOR_DISABLE_ENTITY = REDUX_HELP_EDITOR_DISABLE_ENTITY;
var REDUX_HELP_EDITOR_REMOVE_ENTITY = 'REDUX_HELP_EDITOR_REMOVE_ENTITY';
exports.REDUX_HELP_EDITOR_REMOVE_ENTITY = REDUX_HELP_EDITOR_REMOVE_ENTITY;
var REDUX_HELP_EDITOR_ADD_CONTENT = 'REDUX_HELP_EDITOR_ADD_CONTENT';
exports.REDUX_HELP_EDITOR_ADD_CONTENT = REDUX_HELP_EDITOR_ADD_CONTENT;
var REDUX_HELP_EDITOR_ADD_ITEM_IMAGE = 'REDUX_HELP_EDITOR_ADD_ITEM_IMAGE';
exports.REDUX_HELP_EDITOR_ADD_ITEM_IMAGE = REDUX_HELP_EDITOR_ADD_ITEM_IMAGE;
var REDUX_HELP_EDITOR_REMOVE_ITEM_IMAGE = 'REDUX_HELP_EDITOR_REMOVE_ITEM_IMAGE';
exports.REDUX_HELP_EDITOR_REMOVE_ITEM_IMAGE = REDUX_HELP_EDITOR_REMOVE_ITEM_IMAGE;
var REDUX_HELP_EDITOR_UNDO = 'REDUX_HELP_EDITOR_UNDO';
exports.REDUX_HELP_EDITOR_UNDO = REDUX_HELP_EDITOR_UNDO;
var REDUX_HELP_EDITOR_REDO = 'REDUX_HELP_EDITOR_REDO';
exports.REDUX_HELP_EDITOR_REDO = REDUX_HELP_EDITOR_REDO;

function init() {
  return (0, _reduxAjaxGet.default)('/help-editor/init/', REDUX_HELP_EDITOR_INIT_REQ, {});
}

function selectBundle(bundleId) {
  return (0, _reduxAjaxGet.default)('/help-editor/select-bundle/', REDUX_HELP_EDITOR_SELECT_BUNDLE_REQ, {
    id: bundleId
  });
}

function saveBundle(bundle) {
  var formData = new FormData();
  var params = {
    id: bundle.id,
    children: bundle.children,
    options: bundle.options
  };
  buildFormData(formData, params);

  function buildFormData(formData, data, parentKey) {
    if (data && _typeof(data) === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach(function (key) {
        if (key === 'unsaved') {
          formData.append(parentKey + '[fileName]', data.unsaved.file.name);
          formData.append('files[]', data.unsaved.file);
        } else if (key !== 'hide' && !key.endsWith('Initial')) {
          buildFormData(formData, data[key], parentKey ? "".concat(parentKey, "[").concat(key, "]") : key);
        }
      });
    } else if (data instanceof File) {
      formData.append('files[]', data);
    } else if (data !== undefined) {
      formData.append(parentKey, data);
    }
  }

  return function (dispatch) {
    dispatch({
      type: REDUX_HELP_EDITOR_SAVE_BUNDLE_REQ,
      payload: {
        params: params
      }
    });
    window.$.ajax({
      method: 'POST',
      url: '/help-editor/save-bundle/',
      processData: false,
      contentType: false,
      cache: false,
      data: formData,
      dataType: 'json',
      success: function success(r) {
        if (r.status === 'ok') {
          dispatch({
            type: REDUX_HELP_EDITOR_SAVE_BUNDLE_DONE,
            payload: {
              params: params,
              response: r
            }
          });
        } else {
          dispatch({
            type: REDUX_HELP_EDITOR_SAVE_BUNDLE_ERR,
            payload: {
              params: params,
              response: r.msg ? r.msg : r
            }
          });
          console.log('/help-editor/save-bundle', r);
        }
      },
      error: function error(e) {
        dispatch({
          type: REDUX_HELP_EDITOR_SAVE_BUNDLE_ERR,
          payload: {
            params: params,
            response: e.responseText
          }
        });
        console.log('/help-editor/save-bundle', e);
      }
    });
  };
}

function undo() {
  return {
    type: REDUX_HELP_EDITOR_UNDO
  };
}

function redo() {
  return {
    type: REDUX_HELP_EDITOR_REDO
  };
}

function editBundleParam(path, name, content) {
  return {
    type: REDUX_HELP_EDITOR_EDIT_BUNDLE_PARAM,
    payload: {
      path: path,
      name: name,
      content: content
    }
  };
}

function addCategory(path) {
  return {
    type: REDUX_HELP_EDITOR_ADD_CATEGORY,
    payload: {
      path: path
    }
  };
}

function addItemImage(path, file, content) {
  return {
    type: REDUX_HELP_EDITOR_ADD_ITEM_IMAGE,
    payload: {
      path: path,
      file: file,
      content: content
    }
  };
}

function removeItemImage(path) {
  return {
    type: REDUX_HELP_EDITOR_REMOVE_ITEM_IMAGE,
    payload: {
      path: path
    }
  };
}

function removeEntity(path) {
  var li = path.lastIndexOf('.') + 1;
  var delPath = path.substring(0, li) + '-' + path.substring(li);
  return {
    type: REDUX_HELP_EDITOR_REMOVE_ENTITY,
    payload: {
      path: delPath
    }
  };
}

function disableEntity(path, disabled) {
  return {
    type: REDUX_HELP_EDITOR_DISABLE_ENTITY,
    payload: {
      path: path,
      disabled: disabled
    }
  };
}

function hideCategory(path, hide) {
  return {
    type: REDUX_HELP_EDITOR_HIDE_CATEGORY,
    payload: {
      path: path,
      hide: hide
    }
  };
}

function addContent(path, type) {
  return {
    type: REDUX_HELP_EDITOR_ADD_CONTENT,
    payload: {
      path: path,
      type: type
    }
  };
}