"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _HelpItem = _interopRequireDefault(require("./HelpItem"));

var _EditableText = _interopRequireDefault(require("../components/EditableText"));

var _DropArea = _interopRequireDefault(require("../components/DropArea"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HelpCategoryStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  //padding:5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background: #e6f5ff;\n  margin-left: 15px;\n  width: calc(100% - 20px);\n  .hc-name-container{\n    background: #eee;\n    display: flex;\n    align-items: flex-start;\n    border-bottom: 1px solid #ccc;\n    .hc-n-name{\n      flex: 1;\n      margin-left: 15px;\n      min-height: 30px;\n      line-height: 30px;\n      padding-right: 15px;\n      border-right: 1px solid #ccc;\n    }\n    .hc-n-buttons{\n      padding-left: 5px;\n      line-height: 28px;\n      button{\n        display: inline-block;\n        margin-right: 5px;\n        i.rotated{\n          transform: rotate(180deg);\n        }\n        i.btn-disabled{\n          color: red;\n        }\n      }\n    }\n  }\n  .hc-items-container{\n    padding-bottom: 10px;\n  }\n  .hc-inner-container{\n    padding-bottom: 10px;\n  }\n"])));

var HelpCategory = /*#__PURE__*/function (_Component) {
  _inherits(HelpCategory, _Component);

  var _super = _createSuper(HelpCategory);

  function HelpCategory() {
    var _this;

    _classCallCheck(this, HelpCategory);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (e) {
      var p = _this.props;
      p.actions.editBundleParam(p.path, 'name', e.target.innerHTML);
    });

    return _this;
  }

  _createClass(HelpCategory, [{
    key: "render",
    value: function render() {
      var p = this.props;
      var s = this.state;
      var c = p.category;
      var cats = [{
        delimiter: true
      }];
      var items = [{
        delimiter: true
      }];

      if (!c.hide) {
        var _c$children, _c$items;

        var _iterator = _createForOfIteratorHelper((_c$children = c.children) !== null && _c$children !== void 0 ? _c$children : []),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var i = _step.value;
            cats.push(i);
            cats.push({
              delimiter: true
            });
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = _createForOfIteratorHelper((_c$items = c.items) !== null && _c$items !== void 0 ? _c$items : []),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _i = _step2.value;
            items.push(_i);
            items.push({
              delimiter: true
            });
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      var catN = 0;
      var itemN = 0;
      return /*#__PURE__*/_react.default.createElement(HelpCategoryStyled, {
        className: ""
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "hc-name-container"
      }, /*#__PURE__*/_react.default.createElement(_EditableText.default, {
        className: "hc-n-name",
        item: c,
        name: "name",
        actions: p.actions,
        path: p.path
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "hc-n-buttons"
      }, /*#__PURE__*/_react.default.createElement("button", {
        onClick: p.actions.disableEntity.bind(this, p.path, !c.disabled)
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: 'fas fa-ban' + (c.disabled ? ' btn-disabled' : '')
      })), /*#__PURE__*/_react.default.createElement("button", {
        onClick: p.actions.removeEntity.bind(this, p.path)
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "fas fa-trash-alt"
      })), /*#__PURE__*/_react.default.createElement("button", {
        onClick: p.actions.hideCategory.bind(this, p.path, !c.hide)
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: 'fas fa-chevron-down' + (c.hide ? ' rotated' : '')
      })))), /*#__PURE__*/_react.default.createElement("div", {
        className: "hc-inner-container"
      }, cats.map(function (i, k) {
        return i.delimiter ? /*#__PURE__*/_react.default.createElement(_DropArea.default, {
          key: k,
          path: p.path + '.children.+' + catN,
          token: ['category'],
          actions: p.actions
        }) : /*#__PURE__*/_react.default.createElement(HelpCategory, {
          key: k,
          path: p.path + '.children.' + catN++,
          category: i,
          init: p.init,
          actions: p.actions
        });
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "hc-items-container"
      }, items.map(function (i, k) {
        return i.delimiter ? /*#__PURE__*/_react.default.createElement(_DropArea.default, {
          key: k,
          path: p.path + '.items.+' + itemN,
          token: ['contenttext', 'contentpicture'],
          actions: p.actions
        }) : /*#__PURE__*/_react.default.createElement(_HelpItem.default, {
          key: k,
          path: p.path + '.items.' + itemN++,
          item: i,
          init: p.init,
          actions: p.actions
        });
      })));
    }
  }]);

  return HelpCategory;
}(_react.Component);

exports.default = HelpCategory;