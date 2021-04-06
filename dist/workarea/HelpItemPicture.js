"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _EditableText = _interopRequireDefault(require("../components/EditableText"));

var _HelpItemRemoveButton = _interopRequireDefault(require("./HelpItemRemoveButton"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//import picture from '../resources/picture.svg'
var HelpItemPictureStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  margin-left: 15px;\n  width: calc(100% - 20px);\n  margin-bottom: 5px;\n\n  .hlp-inner {\n    width: 300px;\n\n    .hip-picture {\n      position: relative;\n      width: 100%;\n      height: 200px;\n      background-color: #d2e4b7;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: contain;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      .hip-p-suggest {\n        text-align: center;\n        max-width: 60%;\n      }\n\n      &.active {\n        background-color: yellow;\n\n        .hip-p-suggest {\n          display: none;\n        }\n      }\n\n      .hip-p-instruments {\n        position: absolute;\n        top: 3px;\n        right: 3px;\n        display: flex;\n        color: #ffffff9f;\n        i{\n          cursor: pointer;\n          margin-left: 3px;\n        }\n      }\n    }\n\n    .hlp-descr {\n      font-style: italic;\n    }\n  }\n"])));

var HelpItemPicture = /*#__PURE__*/function (_Component) {
  _inherits(HelpItemPicture, _Component);

  var _super = _createSuper(HelpItemPicture);

  function HelpItemPicture() {
    var _this;

    _classCallCheck(this, HelpItemPicture);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "onDragOver", function (e) {
      if (e.dataTransfer.types.includes('Files')) {
        e.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDragEnter", function (e) {
      if (e.dataTransfer.types.includes('Files')) {
        //console.log(e.dataTransfer.types)
        e.preventDefault();

        _this.setState({
          active: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDragLeave", function (e) {
      if (e.dataTransfer.types.includes('Files')) {
        e.preventDefault();

        _this.setState({
          active: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDrop", function (e) {
      if (e.dataTransfer.types.includes('Files')) {
        e.preventDefault();
        e.persist();

        _this.setState({
          active: false
        }, function () {
          var files = e.dataTransfer.files; //console.log('drop', e.dataTransfer.files);

          if (files.length > 0) {
            var p = _this.props;
            var fileRader = new FileReader();

            fileRader.onload = function (e) {
              p.actions.addItemImage(p.path, files[0], e.target.result); // self.props.onAddImage(self.props.data.token,
              //     {file: files[0], name: files[0].name, src: e.target.result});
            };

            fileRader.readAsDataURL(files[0]);
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFullScreen", function (e) {
      e.target.parentElement.parentElement.requestFullscreen();
    });

    _defineProperty(_assertThisInitialized(_this), "onRemoveImage", function (e) {
      _this.props.actions.removeItemImage(_this.props.path);
    });

    return _this;
  }

  _createClass(HelpItemPicture, [{
    key: "render",
    value: function render() {
      var p = this.props;
      var s = this.state;
      var i = p.item;
      var url;

      if (i.options.unsaved) {
        url = i.options.unsaved.content;
      } else if (i.options.url) {
        url = i.options.url;
      }

      return /*#__PURE__*/_react.default.createElement(HelpItemPictureStyled, {
        className: ""
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "hlp-inner"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: 'hip-picture' + (s.active ? ' active' : '') + (url ? ' visible' : ''),
        onDragEnter: this.onDragEnter,
        onDragOver: this.onDragOver,
        onDragLeave: this.onDragLeave,
        onDrop: this.onDrop,
        style: {
          backgroundImage: "url(" + url + ")"
        }
      }, !url && /*#__PURE__*/_react.default.createElement("div", {
        className: "hip-p-suggest"
      }, "\u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u044E\u0434\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"), url && /*#__PURE__*/_react.default.createElement("div", {
        className: "hip-p-instruments"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "fas fa-trash-alt",
        onClick: this.onRemoveImage
      }), /*#__PURE__*/_react.default.createElement("i", {
        className: "fas fa-expand-arrows-alt",
        onClick: this.onFullScreen
      }))), /*#__PURE__*/_react.default.createElement(_EditableText.default, {
        className: "hlp-descr",
        item: i,
        name: "descr",
        path: p.path,
        actions: p.actions
      })), /*#__PURE__*/_react.default.createElement(_HelpItemRemoveButton.default, {
        path: p.path,
        onRemove: p.actions.removeEntity
      }));
    }
  }]);

  return HelpItemPicture;
}(_react.Component);

exports.default = HelpItemPicture;