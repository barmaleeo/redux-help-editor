"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bundleReducer;
exports.addHistory = addHistory;

var _changeNestedParam = _interopRequireDefault(require("change-nested-param"));

var _reactHelpEditorActions = require("../reactHelpEditorActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  loading: false,
  error: false,
  msg: false,
  id: 0,
  items: [],
  options: {},
  history: [],
  historyPoint: -1
};

function bundleReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pl = action.payload;
  var ns = state;

  switch (action.type) {
    case _reactHelpEditorActions.REDUX_HELP_EDITOR_SELECT_BUNDLE_REQ:
      {
        ns = _objectSpread(_objectSpread({}, ns), {}, {
          history: [],
          historyPoint: -1,
          loading: true,
          error: false,
          msg: false
        });
        break;
      }

    case _reactHelpEditorActions.REDUX_HELP_EDITOR_SELECT_BUNDLE_DONE:
      {
        ns = _objectSpread(_objectSpread(_objectSpread({}, ns), pl.response.bundle), {}, {
          loading: false
        });
        break;
      }

    case _reactHelpEditorActions.REDUX_HELP_EDITOR_SELECT_BUNDLE_ERR:
      {
        ns = _objectSpread(_objectSpread({}, ns), {}, {
          msg: pl.response,
          error: true,
          loading: false
        });
        break;
      }

    case _reactHelpEditorActions.REDUX_HELP_EDITOR_EDIT_BUNDLE_PARAM:
      {
        var path;

        if (pl.path) {
          path = pl.path + '.options.';
        } else {
          path = 'options.';
        }

        ns = (0, _changeNestedParam.default)(ns, path + pl.name, pl.content, {
          createUndefined: true,
          keepInitial: true
        });
        addHistory(ns, state);
        break;
      }

    case _reactHelpEditorActions.REDUX_HELP_EDITOR_ADD_CATEGORY:
      {
        ns = (0, _changeNestedParam.default)(ns, pl.path, {
          id: 0,
          options: {
            name: 'Новая категория'
          }
        }, {
          createUndefined: true
        });
        addHistory(ns, state);
        break;
      }

    case _reactHelpEditorActions.REDUX_HELP_EDITOR_HIDE_CATEGORY:
      {
        ns = (0, _changeNestedParam.default)(ns, pl.path + '.hide', pl.hide, {
          createUndefined: true
        });
        break;
      }

    case _reactHelpEditorActions.REDUX_HELP_EDITOR_REMOVE_ENTITY:
      {
        ns = (0, _changeNestedParam.default)(ns, pl.path);
        addHistory(ns, state);
        break;
      }

    case _reactHelpEditorActions.REDUX_HELP_EDITOR_ADD_ITEM_IMAGE:
      {
        ns = (0, _changeNestedParam.default)(ns, pl.path + '.options.unsaved', {
          file: pl.file,
          content: pl.content
        }, {
          createUndefined: true
        });
        addHistory(ns, state);
        break;
      }

    case _reactHelpEditorActions.REDUX_HELP_EDITOR_REMOVE_ITEM_IMAGE:
      {
        ns = (0, _changeNestedParam.default)(ns, pl.path + '.options.-unsaved', null);
        addHistory(ns, state);
        break;
      }

    case _reactHelpEditorActions.REDUX_HELP_EDITOR_ADD_CONTENT:
      {
        var content;

        if (pl.type === 'text') {
          content = {
            id: 0,
            type: 0,
            options: {
              text: "Lorem Ipsum..."
            }
          };
        } else if (pl.type === 'picture') {
          content = {
            id: 0,
            type: 1,
            options: {
              descr: "Описание изображения"
            }
          };
        }

        if (content) {
          ns = (0, _changeNestedParam.default)(ns, pl.path, content, {
            createUndefined: true
          });
          addHistory(ns, state);
        }

        break;
      }

    case _reactHelpEditorActions.REDUX_HELP_EDITOR_SAVE_BUNDLE_REQ:
      {
        ns = _objectSpread(_objectSpread({}, ns), {}, {
          saveProgress: true,
          saveError: false,
          saveMsg: false
        });
        break;
      }

    case _reactHelpEditorActions.REDUX_HELP_EDITOR_SAVE_BUNDLE_DONE:
      {
        ns = _objectSpread(_objectSpread({}, ns), {}, {
          saveProgress: false,
          history: [],
          historyPoint: -1
        }, pl.response.bundle);
        break;
      }

    case _reactHelpEditorActions.REDUX_HELP_EDITOR_SAVE_BUNDLE_ERR:
      {
        ns = _objectSpread(_objectSpread({}, ns), {}, {
          saveProgress: false,
          saveError: true,
          saveMsg: pl.response.msg
        });
        break;
      }

    case _reactHelpEditorActions.REDUX_HELP_EDITOR_UNDO:
      {
        var h = ns.history[ns.historyPoint];

        if (h) {
          ns = _objectSpread(_objectSpread({}, ns), {}, {
            id: h.id,
            options: h.options,
            children: h.children,
            historyPoint: ns.historyPoint - 1
          });
        }

        break;
      }

    case _reactHelpEditorActions.REDUX_HELP_EDITOR_REDO:
      {
        var _h = ns.history[ns.historyPoint + 1];

        if (_h) {
          ns = _objectSpread(_objectSpread({}, ns), {}, {
            id: _h.id,
            options: _h.options,
            children: _h.children,
            historyPoint: ns.historyPoint + 1
          });
        }

        break;
      }

    default:
  }

  return ns;
}

function addHistory(state) {
  var oldState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (state !== oldState) {
    state.history = state.history.slice();

    if (state.historyPoint < state.history.length - 1) {
      state.history.splice(state.historyPoint + 1, state.history.length - state.historyPoint);
    }

    state.history.push({
      id: oldState.id,
      options: oldState.options,
      children: oldState.children
    });
    state.historyPoint++;
  }
}