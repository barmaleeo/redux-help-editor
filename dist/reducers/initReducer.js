"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initReducer;

var _reactHelpEditorActions = require("../reactHelpEditorActions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  loading: true,
  error: false,
  msg: false,
  imageUrl: 'help-images',
  bundles: []
};

function initReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pl = action.payload;
  var ns = state;

  switch (action.type) {
    case _reactHelpEditorActions.REDUX_HELP_EDITOR_INIT_REQ:
      {
        ns = _objectSpread(_objectSpread({}, ns), {}, {
          loading: true,
          error: false,
          msg: false
        });
        break;
      }

    case _reactHelpEditorActions.REDUX_HELP_EDITOR_INIT_DONE:
      {
        ns = _objectSpread(_objectSpread(_objectSpread({}, ns), pl.response), {}, {
          loading: false
        });
        break;
      }

    case _reactHelpEditorActions.REDUX_HELP_EDITOR_INIT_ERR:
      {
        ns = _objectSpread(_objectSpread({}, ns), {}, {
          msg: pl.response,
          error: true,
          loading: false
        });
        break;
      }

    default:
  }

  return ns;
}