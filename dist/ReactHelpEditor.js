"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _MenuBarContainer = _interopRequireDefault(require("./components/MenuBarContainer"));

var _MenuItemBundles = _interopRequireDefault(require("./menu/MenuItemBundles"));

var _WorkArea = _interopRequireDefault(require("./workarea/WorkArea"));

var _SaveControl = _interopRequireDefault(require("./menu/SaveControl"));

var _MenuItemAdd = _interopRequireDefault(require("./menu/MenuItemAdd"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ReactHelpEditorStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: 18px;\n  *{\n    box-sizing: border-box;\n  }\n  button{\n    font-size: 13px;\n    line-height: normal;\n    border-radius: 2px;\n    border: 1px solid #777;\n  }\n\n"])));

var ReactHelpEditor = /*#__PURE__*/function (_PureComponent) {
  _inherits(ReactHelpEditor, _PureComponent);

  var _super = _createSuper(ReactHelpEditor);

  function ReactHelpEditor() {
    _classCallCheck(this, ReactHelpEditor);

    return _super.apply(this, arguments);
  }

  _createClass(ReactHelpEditor, [{
    key: "render",
    value: function render() {
      var p = this.props;
      var s = this.state;
      return /*#__PURE__*/_react.default.createElement(ReactHelpEditorStyled, {
        className: ""
      }, /*#__PURE__*/_react.default.createElement(_MenuBarContainer.default, null, /*#__PURE__*/_react.default.createElement(_MenuItemBundles.default, {
        bundle: p.bundle,
        init: p.init,
        onSelect: p.actions.selectBundle
      }), /*#__PURE__*/_react.default.createElement(_SaveControl.default, {
        bundle: p.bundle,
        init: p.init,
        actions: p.actions
      }), /*#__PURE__*/_react.default.createElement(_MenuItemAdd.default, {
        bundle: p.bundle,
        init: p.init,
        actions: p.actions
      })), /*#__PURE__*/_react.default.createElement(_WorkArea.default, {
        bundle: p.bundle,
        init: p.init,
        actions: p.actions
      }));
    }
  }]);

  return ReactHelpEditor;
}(_react.PureComponent);

exports.default = ReactHelpEditor;