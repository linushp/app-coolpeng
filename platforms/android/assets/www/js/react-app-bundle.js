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

	var React = __webpack_require__(1);


	var CpApp = React.createClass({displayName: "CpApp",
	    getInitialState: function() {
	        return {
	            loading: true,
	            tab: 1,
	            data: null
	        };
	    },

	    componentDidMount:function() {
	    },

	    render: function() {
	            return (
	                React.createElement("div", {className: "cp-page"}, 
	                    React.createElement("h1", null, "Most Popular JavaScript Projects in Github"), 
	                    React.createElement("div", {className: "cp-tabs"}, 
	                        React.createElement("div", {className: "cp-tabs2"}, 
	                            React.createElement("div", {className: this.state.tab==0?"tab on":"tab"}, "通讯"), 
	                            React.createElement("div", {className: this.state.tab==1?"tab on":"tab"}, "待办"), 
	                            React.createElement("div", {className: this.state.tab==2?"tab on":"tab"}, "记账")
	                        )
	                    )
	                )
	            );
	    }
	});







	function reactAppRun(){
	    React.render(
	        React.createElement(CpApp, null, " "),
	        document.getElementById('react-app')
	    );
	}

	window.reactAppRun = reactAppRun;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = window.React;

/***/ }
/******/ ]);