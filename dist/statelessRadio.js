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
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function statelessRadio(React) {
	  function StatelessRadio(props) {
	    var baseId = props.baseId;
	    var defaultValue = props.defaultValue;
	    var _props$inputs = props.inputs;
	    var inputs = _props$inputs === undefined ? [] : _props$inputs;
	    var titleText = props.titleText;
	    var _props$onSelection = props.onSelection;
	    var onSelection = _props$onSelection === undefined ? function () {} : _props$onSelection;

	    function handleSelectionChange(event) {
	      onSelection(event.target.value);
	    }

	    var titleId = baseId + "__title";

	    return React.createElement(
	      "div",
	      { id: baseId },
	      React.createElement(
	        "p",
	        { id: titleId },
	        titleText
	      ),
	      inputs.map(function (inputItem, index) {
	        var inputId = baseId + "__input" + index;
	        var defaultChecked = defaultValue === inputItem.value;

	        return React.createElement(
	          "div",
	          { key: index },
	          React.createElement("input", { id: inputId, name: baseId, type: "radio", value: inputItem.value, defaultChecked: defaultChecked, onChange: handleSelectionChange }),
	          React.createElement(
	            "label",
	            { htmlFor: inputId },
	            inputItem.label
	          )
	        );
	      })
	    );
	  }

	  return StatelessRadio;
	}

	exports.default = statelessRadio;

/***/ }
/******/ ]);