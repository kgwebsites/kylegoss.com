module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(5);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(1);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// EXTERNAL MODULE: external "material-ui-icons"
var external__material_ui_icons_ = __webpack_require__(2);
var external__material_ui_icons__default = /*#__PURE__*/__webpack_require__.n(external__material_ui_icons_);

// CONCATENATED MODULE: ./src/components/Home/Hero.js
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    display: flex;\n    height: 100vh;\n    width: 100vw;\n    background: url(", ") 100% 100%/cover no-repeat fixed;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    font-size: 2rem;\n    text-shadow: 1px 1px 1px #fff;\n    width: 3rem!important;\n    height: 3rem!important;\n    filter: drop-shadow( 0px 4px 0px #fff );\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Kyle = '/static/images/kyle-jason-goss.jpg';
var FullScreen = external__styled_components__default.a.section(_templateObject, Kyle);
var KeyboardArrowDownStyled = external__styled_components__default()(external__material_ui_icons_["KeyboardArrowDown"])(_templateObject2);

var Hero_Hero = function Hero() {
  return external__react__default.a.createElement("section", null, external__react__default.a.createElement(FullScreen, null, external__react__default.a.createElement("i", null, "\xA0"), external__react__default.a.createElement("div", null, external__react__default.a.createElement("h1", null, "Kyle Goss"), external__react__default.a.createElement("h2", null, "Software Engineer"), external__react__default.a.createElement("h2", null, "Entrepreneur"), external__react__default.a.createElement("h2", null, "Teacher")), external__react__default.a.createElement(KeyboardArrowDownStyled, null)));
};

/* harmony default export */ var Home_Hero = (Hero_Hero);
// CONCATENATED MODULE: ./src/components/Home/Projects.js
var Projects__templateObject = /*#__PURE__*/ Projects__taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 4rem .5rem;\n"]),
    Projects__templateObject2 = /*#__PURE__*/ Projects__taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: .5rem;\n    text-align: center;\n"]),
    _templateObject3 = /*#__PURE__*/ Projects__taggedTemplateLiteral(["\n    height: 3rem!important;\n    width: 3rem!important;\n    color: #27ae5f;\n"]),
    _templateObject4 = /*#__PURE__*/ Projects__taggedTemplateLiteral(["\n    height: 3rem!important;\n    width: 3rem!important;\n    color: #d9242b;\n"]),
    _templateObject5 = /*#__PURE__*/ Projects__taggedTemplateLiteral(["\n    height: 3rem!important;\n    width: 3rem!important;\n    color: #41de8d;\n"]);

function Projects__taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var kgwebsites = '/static/images/kg-websites.svg';
var webdevprofesh = '/static/images/web-dev-profesh.svg';
var heartlandtack = '/static/images/heartland-tack.png';
var Grid = external__styled_components__default.a.section(Projects__templateObject);
var Project = external__styled_components__default.a.article(Projects__templateObject2);
var CodeStyled = external__styled_components__default()(external__material_ui_icons_["Code"])(_templateObject3);
var StoreStyled = external__styled_components__default()(external__material_ui_icons_["Store"])(_templateObject4);
var OndemandVideoStyled = external__styled_components__default()(external__material_ui_icons_["OndemandVideo"])(_templateObject5);

var Projects_Projects = function Projects() {
  return external__react__default.a.createElement(Grid, null, external__react__default.a.createElement(Project, null, external__react__default.a.createElement("img", {
    src: kgwebsites,
    height: "75",
    alt: "KG Websites"
  }), external__react__default.a.createElement("p", null, "Web Apps / Software Projects"), external__react__default.a.createElement("a", {
    href: "https://kgwebsites.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, external__react__default.a.createElement(CodeStyled, null))), external__react__default.a.createElement(Project, null, external__react__default.a.createElement("img", {
    src: heartlandtack,
    height: "75",
    alt: "Heartland Tack"
  }), external__react__default.a.createElement("p", null, "eCommerce Shopify Store"), external__react__default.a.createElement("a", {
    href: "https://heartlandtack.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, external__react__default.a.createElement(StoreStyled, null))), external__react__default.a.createElement(Project, null, external__react__default.a.createElement("img", {
    src: webdevprofesh,
    height: "75",
    alt: "Web Dev Profesh"
  }), external__react__default.a.createElement("p", null, "Web Development Youtube Channel"), external__react__default.a.createElement("a", {
    href: "https://youtube.com/c/WebDevProfesh",
    target: "_blank",
    rel: "noopener noreferrer"
  }, external__react__default.a.createElement(OndemandVideoStyled, null))));
};

/* harmony default export */ var Home_Projects = (Projects_Projects);
// CONCATENATED MODULE: ./src/components/Home/About.js
var About__templateObject = /*#__PURE__*/ About__taggedTemplateLiteral(["\n    display: block;\n    background: url(", ") center/cover no-repeat fixed;\n    height: 300px;\n    text-align: center;\n"]),
    About__templateObject2 = /*#__PURE__*/ About__taggedTemplateLiteral(["\n    display: flex;\n    width: 1000px;\n    max-width: calc(100% - 2rem);\n    margin: auto;\n    padding: 4rem 1rem;\n"]);

function About__taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var kyleVectorized = '/static/images/kyle-vectorized.jpg';
var DarkWrapper = external__styled_components__default.a.section(About__templateObject, kyleVectorized);
var Container = external__styled_components__default.a.section(About__templateObject2);

var About_About = function About() {
  return external__react__default.a.createElement("section", null, external__react__default.a.createElement(DarkWrapper, null), external__react__default.a.createElement(Container, null, external__react__default.a.createElement("div", null, external__react__default.a.createElement("p", null, "My name is Kyle Goss and I have been doing web development for the past 12 years, ever since it was the cool thing to have a customized Myspace profile. "), external__react__default.a.createElement("p", null, "The past few years I have specialized in software and web applications."), external__react__default.a.createElement("p", null, "When I\u2019m not creating websites, I\u2019m creating businesses of my own, expanding my knowledge and adding to my income streams. I currently run an ecommerce dropship store, I have launched a successful digital Info product, and I own a couple niche SEO driven, ad-generating, websites."))));
};

/* harmony default export */ var Home_About = (About_About);
// CONCATENATED MODULE: ./src/components/Home/Work.js
var Work__templateObject = /*#__PURE__*/ Work__taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background: url(", ") center/cover no-repeat fixed;\n    height: 300px;\n    color: #fff;\n"]);

function Work__taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var work = '/static/images/work.jpg';
var WorkImage = external__styled_components__default.a.section(Work__templateObject, work);
var WorkText = {
  textShadow: 'none'
};

var Work_Work = function Work() {
  return external__react__default.a.createElement("section", null, external__react__default.a.createElement(WorkImage, null, external__react__default.a.createElement("h2", {
    style: WorkText
  }, "Career"), external__react__default.a.createElement("h3", {
    style: WorkText
  }, "Front End (Software) Engineer"), external__react__default.a.createElement("h4", {
    style: WorkText
  }, "Foresee Medical Inc"), external__react__default.a.createElement("h5", {
    style: WorkText
  }, "Del Mar, CA")));
};

/* harmony default export */ var Home_Work = (Work_Work);
// CONCATENATED MODULE: ./src/components/Home/Contact.js
var Contact__templateObject = /*#__PURE__*/ Contact__taggedTemplateLiteral(["\n    padding: 4rem 0;\n"]),
    Contact__templateObject2 = /*#__PURE__*/ Contact__taggedTemplateLiteral(["\n    display: block;\n    width: 20rem;\n    max-width: 100%;\n    margin: auto;\n    padding: .5rem;\n    margin-bottom: .5rem;\n    border: 0;\n    border-bottom: 1px solid #ccc;\n"]),
    Contact__templateObject3 = /*#__PURE__*/ Contact__taggedTemplateLiteral(["\n    display: block;\n    width: 21rem;\n    max-width: 100%;\n    margin: auto;\n    margin-bottom: .5rem;\n    padding: .5rem;\n    background-color: white;\n    border: 1px solid #27ae5f;\n    color: #27ae5f;\n    transition: all .25s ease-in-out;\n    &:hover {\n        cursor: pointer;\n        background-color: #27ae5f;\n        color: white;\n    }\n"]),
    Contact__templateObject4 = /*#__PURE__*/ Contact__taggedTemplateLiteral(["\n    text-align: center;\n    color: #27ae5f;\n"]),
    Contact__templateObject5 = /*#__PURE__*/ Contact__taggedTemplateLiteral(["\n    text-align: center;\n    color: firebrick;\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Contact__taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Form = external__styled_components__default.a.section(Contact__templateObject);
var Text = external__styled_components__default.a.input(Contact__templateObject2);
var Textarea = external__styled_components__default.a.textarea(Contact__templateObject2);
var Submit = external__styled_components__default.a.button(Contact__templateObject3);
var Success = external__styled_components__default.a.div(Contact__templateObject4);
var Error = external__styled_components__default.a.div(Contact__templateObject5);

var Contact_Contact =
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
      return external__react__default.a.createElement(Form, null, external__react__default.a.createElement("h2", {
        className: "text-center"
      }, "Send me a message!"), !this.state.success && external__react__default.a.createElement("form", {
        id: "contact-form",
        name: "Contact Form",
        "data-netlify": "true"
      }, external__react__default.a.createElement(Text, {
        name: "email",
        placeholder: "Email Address",
        type: "email",
        value: this.state.email,
        onChange: this.handleEmailChange,
        required: true
      }), external__react__default.a.createElement(Textarea, {
        name: "message",
        placeholder: "Message",
        value: this.state.text,
        onChange: this.handleTextChange,
        required: true
      }), external__react__default.a.createElement(Submit, {
        type: "submit"
      }, "Submit")), this.state.success && external__react__default.a.createElement(Success, null, "Your message was sent!"), this.state.errors.length > 0 && this.state.errors.map(function (error, index) {
        return external__react__default.a.createElement(Error, {
          key: index,
          className: "danger"
        }, error);
      }) // eslint-disable-line react/no-array-index-key
      );
    }
  }]);

  return Contact;
}(external__react_["Component"]);

/* harmony default export */ var Home_Contact = (Contact_Contact);
// CONCATENATED MODULE: ./src/components/Home/Footer.js
var Footer__templateObject = /*#__PURE__*/ Footer__taggedTemplateLiteral(["\n    display: flex;\n    padding: 4rem 0;\n    align-items: center;\n    justify-content: space-around;\n    background-color: #333;\n"]);

function Footer__taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var facebook = '/static/images/facebook.svg';
var instagram = '/static/images/instagram.svg';
var linkedin = '/static/images/linkedin.svg';
var youtube = '/static/images/youtube.svg';
var github = '/static/images/github.svg';
var reddit = '/static/images/reddit.svg';
var socialProfiles = [{
  social: facebook,
  url: 'https://www.facebook.com/gossisboss1'
}, {
  social: instagram,
  url: 'https://www.instagram.com/gossb0ss/'
}, {
  social: linkedin,
  url: 'https://www.linkedin.com/in/gosskyle/'
}, {
  social: youtube,
  url: 'https://www.youtube.com/c/WebDevProfesh'
}, {
  social: github,
  url: 'https://github.com/kgwebsites'
}, {
  social: reddit,
  url: 'https://www.reddit.com/user/kgwebsites'
}];
var FooterContainer = external__styled_components__default.a.footer(Footer__templateObject);

var Footer_Footer = function Footer() {
  return external__react__default.a.createElement(FooterContainer, null, socialProfiles.map(function (social) {
    return external__react__default.a.createElement("a", {
      key: "".concat(social.url, "-").concat(social.social),
      href: social.url,
      target: "_blank"
    }, external__react__default.a.createElement("img", {
      src: social.social,
      height: "25",
      alt: social.social
    }));
  }));
};

/* harmony default export */ var Home_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./src/components/Home/index.js








var Home_Home = function Home() {
  return external__react__default.a.createElement("main", null, external__react__default.a.createElement(Home_Hero, null), external__react__default.a.createElement(Home_Projects, null), external__react__default.a.createElement(Home_About, null), external__react__default.a.createElement(Home_Work, null), external__react__default.a.createElement(Home_Contact, null), external__react__default.a.createElement(Home_Footer, null));
};

/* harmony default export */ var components_Home = (Home_Home);
// CONCATENATED MODULE: ./pages/index.js




var pages_index = function index() {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("meta", {
    charSet: "utf-8",
    key: "meta-charset"
  }), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    key: "meta-viewport"
  }), external__react__default.a.createElement("meta", {
    name: "theme-color",
    content: "#333333",
    key: "meta-theme-color"
  }), external__react__default.a.createElement("link", {
    rel: "manifest",
    href: "/static/manifest.json",
    key: "meta-manifest"
  }), external__react__default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    key: "meta-icon"
  }), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/base.css",
    key: "meta-base-styles"
  })), external__react__default.a.createElement(components_Home, null));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_index);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })
/******/ ]);