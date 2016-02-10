module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _statelessRadio = __webpack_require__(1);

	var _statelessRadio2 = _interopRequireDefault(_statelessRadio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function statelessRadioGroup(React) {
	  function StatelessRadioGroup(props) {
	    var radioConfig = {
	      defaultValue: props.defaultValue,
	      name: props.name,
	      onSelection: props.onSelection
	    };

	    return props.children((0, _statelessRadio2.default)(React, radioConfig));
	  }

	  StatelessRadioGroup.propTypes = {
	    name: React.PropTypes.string,
	    defaultValue: React.PropTypes.string,
	    onSelection: React.PropTypes.func,
	    children: React.PropTypes.func.isRequired
	  };

	  return StatelessRadioGroup;
	}

	exports.default = statelessRadioGroup;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function statelessRadio(React, config) {
	  var name = config.name;
	  var defaultValue = config.defaultValue;
	  var _config$onSelection = config.onSelection;
	  var onSelection = _config$onSelection === undefined ? function () {
	    return void 0;
	  } : _config$onSelection;


	  function StatelessRadio(props) {
	    var defaultChecked = defaultValue === props.value;

	    function handleSelectionChange() {
	      onSelection(props.value);
	    }

	    return React.createElement("input", _extends({}, props, {
	      type: "radio",
	      name: name,
	      defaultChecked: defaultChecked,
	      onChange: handleSelectionChange
	    }));
	  }

	  StatelessRadio.propTypes = {
	    value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.bool])
	  };

	  return StatelessRadio;
	}

	exports.default = statelessRadio;

/***/ }
/******/ ]);