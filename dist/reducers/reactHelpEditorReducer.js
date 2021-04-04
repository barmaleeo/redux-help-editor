"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _initReducer = _interopRequireDefault(require("./initReducer"));

var _bundleReducer = _interopRequireDefault(require("./bundleReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  init: _initReducer.default,
  bundle: _bundleReducer.default
});

exports.default = _default;