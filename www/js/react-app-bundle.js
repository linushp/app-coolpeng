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

	"use strict";

	var React = __webpack_require__(1);

	var CpApp = React.createClass({
	    displayName: "CpApp",

	    getInitialState: function getInitialState() {
	        return {
	            loading: true,
	            tabIndex: 1,
	            data: null
	        };
	    },

	    componentDidMount: function componentDidMount() {},

	    onClickTab: function onClickTab(index) {
	        this.setState({
	            tabIndex: index
	        });
	    },

	    render: function render() {
	        var _this = this;

	        var state = this.state;
	        return React.createElement(
	            "div",
	            { className: "cp-page" },
	            React.createElement(
	                "div",
	                { "class": "cp-nav" },
	                state.tabIndex
	            ),
	            React.createElement("div", { "class": "cp-view" }),
	            React.createElement(
	                "div",
	                { className: "cp-tabs" },
	                React.createElement(
	                    "div",
	                    { className: "cp-tabs2" },
	                    React.createElement(
	                        "div",
	                        { className: state.tabIndex == 0 ? "tab on" : "tab", onClick: function () {
	                                return _this.onClickTab(0);
	                            } },
	                        "首页"
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: state.tabIndex == 1 ? "tab on" : "tab", onClick: function () {
	                                return _this.onClickTab(1);
	                            } },
	                        "进吧"
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: state.tabIndex == 2 ? "tab on" : "tab", onClick: function () {
	                                return _this.onClickTab(2);
	                            } },
	                        "消息"
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: state.tabIndex == 3 ? "tab on" : "tab", onClick: function () {
	                                return _this.onClickTab(3);
	                            } },
	                        "我的"
	                    )
	                )
	            )
	        );
	    }
	});

	function reactAppRun() {
	    React.render(React.createElement(
	        CpApp,
	        null,
	        " "
	    ), document.getElementById('react-app'));
	}

	window.reactAppRun = reactAppRun;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = window.React;

/***/ }
/******/ ]);