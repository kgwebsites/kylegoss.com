webpackHotUpdate(4,{

/***/ "./src/components/Home/Contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _jsxFileName = "/Users/KyleGoss/iCloud Drive (Archive) - 1/Projects/kylegoss.com/src/components/Home/Contact.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Form = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].section.withConfig({
  displayName: "Contact__Form",
  componentId: "s4vufer-0"
})(["padding:4rem 0;"]);
var Text = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].input.withConfig({
  displayName: "Contact__Text",
  componentId: "s4vufer-1"
})(["display:block;width:20rem;max-width:100%;margin:auto;padding:.5rem;margin-bottom:.5rem;border:0;border-bottom:1px solid #ccc;"]);
var Textarea = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].textarea.withConfig({
  displayName: "Contact__Textarea",
  componentId: "s4vufer-2"
})(["display:block;width:20rem;max-width:100%;margin:auto;padding:.5rem;margin-bottom:.5rem;border:0;border-bottom:1px solid #ccc;"]);
var Submit = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].button.withConfig({
  displayName: "Contact__Submit",
  componentId: "s4vufer-3"
})(["display:block;width:21rem;max-width:100%;margin:auto;margin-bottom:.5rem;padding:.5rem;background-color:white;border:1px solid #27ae5f;color:#27ae5f;transition:all .25s ease-in-out;&:hover{cursor:pointer;background-color:#27ae5f;color:white;}"]);
var Success = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div.withConfig({
  displayName: "Contact__Success",
  componentId: "s4vufer-4"
})(["text-align:center;color:#27ae5f;"]);
var Error = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div.withConfig({
  displayName: "Contact__Error",
  componentId: "s4vufer-5"
})(["text-align:center;color:firebrick;"]);

var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Contact.__proto__ || Object.getPrototypeOf(Contact)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        text: '',
        email: '',
        captcha: '',
        errors: [],
        success: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleEmailChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          email: event.target.value
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleTextChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          text: event.target.value
        });
      }
    }), _temp));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Send me a message!"), !this.state.success && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        id: "contact-form",
        name: "Contact Form",
        netlify: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Text, {
        name: "email",
        placeholder: "Email Address",
        type: "email",
        value: this.state.email,
        onChange: this.handleEmailChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Textarea, {
        name: "message",
        placeholder: "Message",
        value: this.state.text,
        onChange: this.handleTextChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Submit, {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Submit")), this.state.success && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Success, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "Your message was sent!"), this.state.errors.length > 0 && this.state.errors.map(function (error, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Error, {
          key: index,
          className: "danger",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, error);
      }) // eslint-disable-line react/no-array-index-key
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Contact;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Form, "Form", "/Users/KyleGoss/iCloud Drive (Archive) - 1/Projects/kylegoss.com/src/components/Home/Contact.js");
  reactHotLoader.register(Text, "Text", "/Users/KyleGoss/iCloud Drive (Archive) - 1/Projects/kylegoss.com/src/components/Home/Contact.js");
  reactHotLoader.register(Textarea, "Textarea", "/Users/KyleGoss/iCloud Drive (Archive) - 1/Projects/kylegoss.com/src/components/Home/Contact.js");
  reactHotLoader.register(Submit, "Submit", "/Users/KyleGoss/iCloud Drive (Archive) - 1/Projects/kylegoss.com/src/components/Home/Contact.js");
  reactHotLoader.register(Success, "Success", "/Users/KyleGoss/iCloud Drive (Archive) - 1/Projects/kylegoss.com/src/components/Home/Contact.js");
  reactHotLoader.register(Error, "Error", "/Users/KyleGoss/iCloud Drive (Archive) - 1/Projects/kylegoss.com/src/components/Home/Contact.js");
  reactHotLoader.register(Contact, "Contact", "/Users/KyleGoss/iCloud Drive (Archive) - 1/Projects/kylegoss.com/src/components/Home/Contact.js");
  reactHotLoader.register(_default, "default", "/Users/KyleGoss/iCloud Drive (Archive) - 1/Projects/kylegoss.com/src/components/Home/Contact.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.6c6efd6776b26c0ef45c.hot-update.js.map