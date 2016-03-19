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
	var AppStore = __webpack_require__(2);
	var AppActions = __webpack_require__(4);
	var AppCommon = __webpack_require__(6);

	var HomePage = __webpack_require__(8);
	var TopicPage = __webpack_require__(9);
	var MsgPage = __webpack_require__(10);
	var PicPage = __webpack_require__(11);
	var UserPage = __webpack_require__(12);

	var CpApp = React.createClass({
	    displayName: "CpApp",

	    getInitialState: function getInitialState() {
	        return AppStore.getALL();
	    },

	    onAppStoreChange: function onAppStoreChange() {
	        this.setState(AppStore.getALL());
	    },

	    componentDidMount: function componentDidMount() {
	        AppStore.addChangeListener(this.onAppStoreChange);
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        AppStore.removeChangeListener(this.onAppStoreChange);
	    },

	    onClickTab: function onClickTab(index, title) {
	        AppActions.onClickTab(index, title);
	    },

	    render: function render() {
	        var state = this.state;
	        return React.createElement(
	            "div",
	            { className: "cp-page" },
	            React.createElement(
	                "div",
	                { className: "cp-nav" },
	                state.title
	            ),
	            React.createElement(
	                "div",
	                { className: "cp-view" },
	                React.createElement("div", { className: "cp-nav-p" }),
	                React.createElement(
	                    "div",
	                    { className: ["cp-view-p", "cp-view0", state.tabIndex == 0 ? "on" : "off"].join(" ") },
	                    " ",
	                    React.createElement(
	                        HomePage,
	                        null,
	                        " "
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: ["cp-view-p", "cp-view1", state.tabIndex == 1 ? "on" : "off"].join(" ") },
	                    " ",
	                    React.createElement(
	                        TopicPage,
	                        null,
	                        " "
	                    ),
	                    " "
	                ),
	                React.createElement(
	                    "div",
	                    { className: ["cp-view-p", "cp-view2", state.tabIndex == 2 ? "on" : "off"].join(" ") },
	                    " ",
	                    React.createElement(
	                        MsgPage,
	                        null,
	                        " "
	                    ),
	                    " "
	                ),
	                React.createElement(
	                    "div",
	                    { className: ["cp-view-p", "cp-view3", state.tabIndex == 3 ? "on" : "off"].join(" ") },
	                    " ",
	                    React.createElement(
	                        PicPage,
	                        null,
	                        " "
	                    ),
	                    " "
	                ),
	                React.createElement(
	                    "div",
	                    { className: ["cp-view-p", "cp-view4", state.tabIndex == 4 ? "on" : "off"].join(" ") },
	                    " ",
	                    React.createElement(
	                        UserPage,
	                        { currentUser: state.currentUser },
	                        " "
	                    ),
	                    " "
	                ),
	                React.createElement("div", { className: "cp-tabs-p" })
	            ),
	            React.createElement(
	                "div",
	                { className: "cp-tabs" },
	                React.createElement(
	                    "div",
	                    { className: "cp-tabs2" },
	                    React.createElement(
	                        "div",
	                        { className: state.tabIndex == 0 ? "tab on" : "tab", onClick: this.onClickTab.bind(this, 0, "首页") },
	                        "首页"
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: state.tabIndex == 1 ? "tab on" : "tab", onClick: this.onClickTab.bind(this, 1, "话题") },
	                        "话题"
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: state.tabIndex == 2 ? "tab on" : "tab", onClick: this.onClickTab.bind(this, 2, "消息") },
	                        "消息"
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: state.tabIndex == 3 ? "tab on" : "tab", onClick: this.onClickTab.bind(this, 3, "图片") },
	                        "图片"
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: state.tabIndex == 4 ? "tab on" : "tab", onClick: this.onClickTab.bind(this, 4, "我的") },
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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ = __webpack_require__(3);
	var localStorage = window.localStorage;

	var listeners = [];

	var findListener = function findListener(foo) {
	    for (var i = 0; i < listeners.length; i++) {
	        var obj = listeners[i];
	        if (obj === foo) {
	            return i;
	        }
	    }
	    return null;
	};

	var AppStore = {

	    data: {
	        title: "首页",
	        tabIndex: 0,
	        currentUser: (function () {
	            var currentUser = localStorage.getItem("currentUser");
	            if (currentUser && currentUser.length > 0) {
	                return JSON.parse(currentUser);
	            }
	            return null;
	        })()
	    },

	    getALL: function getALL() {
	        return this.data;
	    },

	    setCurrentUser: function setCurrentUser(currentUser) {
	        if (currentUser) {
	            this.data.currentUser = currentUser;
	            currentUser = JSON.stringify(currentUser);
	            localStorage.setItem("currentUser", currentUser);
	        } else {
	            this.data.currentUser = null;
	            localStorage.removeItem("currentUser");
	        }
	    },

	    setTabIndex: function setTabIndex(tabIndex) {
	        this.data.tabIndex = tabIndex;
	    },

	    setTitle: function setTitle(title) {
	        this.data.title = title;
	    },

	    emitChange: function emitChange() {
	        for (var i = 0; i < listeners.length; i++) {
	            var obj = listeners[i];
	            if (_.isFunction(obj)) {
	                obj();
	            }
	        }
	    },

	    addChangeListener: function addChangeListener(callback) {
	        if (!findListener(callback)) {
	            listeners.push(callback);
	        }
	    },

	    removeChangeListener: function removeChangeListener(callback) {
	        listeners = _.reject(listeners, function (obj) {
	            return obj == callback;
	        });
	    }

	};

	module.exports = AppStore;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = window._;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(3);

	var AppDispatcher = __webpack_require__(5);
	var AppStore = __webpack_require__(2);
	var AppCommon = __webpack_require__(6);

	var AppActions = {
	    onClickTab: function onClickTab(tabIndex, tabName) {
	        AppStore.setTabIndex(tabIndex);
	        AppStore.setTitle(tabName);
	        AppStore.emitChange();
	    },

	    onClickLogin: function onClickLogin(username, password) {
	        AppCommon.ajax("/app/user/login.json").params({ username: username, password: password }).req(function (d) {
	            if (d.responseCode === 0) {
	                AppStore.setCurrentUser(d.data);
	                AppStore.emitChange();
	            } else {
	                alert(d.responseText);
	            }
	        });
	    },
	    onClickLogout: function onClickLogout(currentUser) {
	        var tokenId = currentUser.lastLoginToken || "";
	        AppCommon.ajax("/app/user/logout.json").params({ tokenId: tokenId }).req(function (d) {
	            if (d.responseCode === 0) {
	                AppStore.setCurrentUser(null);
	                AppStore.emitChange();
	            } else {
	                alert(d.responseText);
	            }
	        });
	    }
	};

	module.exports = AppActions;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by user1 on 2016/3/18.
	 */

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ = __webpack_require__(3);
	var $ = __webpack_require__(7);

	var contextURL = "http://192.168.0.105:9090/coolpeng";

	var AppCommon = {
	    contextURL: contextURL,
	    toQueryParam: function toQueryParam(paramObject) {
	        var paramArray = _.map(paramObject, function (value, key) {
	            return key + "=" + encodeURIComponent(value);
	        });
	        if (paramArray && paramArray.length > 0) {
	            return "?" + paramArray.join("&");
	        }
	        return "";
	    },

	    ajax: function ajax(url) {
	        var config = {
	            url: contextURL + url,
	            contentType: "application/json;charset=UTF-8",
	            dataType: "json",
	            type: "post",
	            success: function success(data) {},
	            beforeSend: function beforeSend(XMLHttpRequest) {
	                var currentUser = localStorage.getItem("currentUser");
	                if (currentUser && currentUser.length > 0) {
	                    currentUser = JSON.parse(currentUser);
	                    XMLHttpRequest.setRequestHeader("tmsApp.tokenId", currentUser.lastLoginToken);
	                } else {
	                    XMLHttpRequest.setRequestHeader("tmsApp.tokenId", "");
	                }

	                var device = window.device || {};
	                XMLHttpRequest.setRequestHeader("tmsApp.device.platform", device.platform);
	                XMLHttpRequest.setRequestHeader("tmsApp.device.uuid", device.uuid);
	            }
	        };

	        var ajax = {
	            config: config,
	            params: function params(_params) {
	                var _this = this;
	                var str = AppCommon.toQueryParam(_params);
	                _this.config.url = _this.config.url + str;
	                return _this;
	            },
	            data: function data(_data) {
	                var _this = this;
	                _this.config.data = JSON.stringify(_data);
	                return _this;
	            },
	            request: function request(callback) {
	                var _this = this;
	                _this.config.success = callback;
	                return $.ajax(_this.config);
	            }
	        };

	        ajax.req = ajax.request;
	        return ajax;
	    }
	};

	window.AppCommon = AppCommon;

	module.exports = AppCommon;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = window.jQuery;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ = __webpack_require__(3);
	var React = __webpack_require__(1);

	var dataList = [];

	function addDataList() {
	    dataList.push({
	        name: "栾海鹏",
	        title: "来说说龙珠不科学的地方",
	        message: "来说说龙珠不科学的地方,来说说龙珠不科学的地方,来说说龙珠不科学的地方,来说说龙珠不科学的地方"
	    });
	}

	for (var i = 0; i < 20; i++) {
	    addDataList();
	}

	var HomePage = React.createClass({
	    displayName: "HomePage",

	    getInitialState: function getInitialState() {
	        return { dataList: dataList };
	    },

	    onAppStoreChange: function onAppStoreChange() {},

	    componentDidMount: function componentDidMount() {},

	    componentWillUnmount: function componentWillUnmount() {},

	    onClickTab: function onClickTab(index) {},

	    render: function render() {
	        var state = this.state;
	        var dataList = state.dataList || [];
	        return React.createElement(
	            "div",
	            { className: "cp-home" },
	            _.map(dataList, function (d) {
	                return React.createElement(
	                    "div",
	                    { className: "cp-item" },
	                    React.createElement(
	                        "h3",
	                        null,
	                        d.title
	                    ),
	                    React.createElement(
	                        "div",
	                        null,
	                        d.message
	                    )
	                );
	            })
	        );
	    }
	});

	module.exports = HomePage;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ = __webpack_require__(3);
	var React = __webpack_require__(1);

	var TopicPage = React.createClass({
	    displayName: "TopicPage",

	    getInitialState: function getInitialState() {
	        return { dataList: [] };
	    },

	    onAppStoreChange: function onAppStoreChange() {},

	    componentDidMount: function componentDidMount() {},

	    componentWillUnmount: function componentWillUnmount() {},

	    onClickTab: function onClickTab(index) {},

	    render: function render() {
	        var state = this.state;
	        var dataList = state.dataList || [];
	        return React.createElement(
	            "div",
	            { className: "cp-home" },
	            _.map(dataList, function (d) {
	                return React.createElement(
	                    "div",
	                    { className: "cp-item" },
	                    React.createElement(
	                        "h3",
	                        null,
	                        d.title
	                    ),
	                    React.createElement(
	                        "div",
	                        null,
	                        d.message
	                    )
	                );
	            })
	        );
	    }
	});

	module.exports = TopicPage;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ = __webpack_require__(3);
	var React = __webpack_require__(1);

	var MsgPage = React.createClass({
	    displayName: "MsgPage",

	    getInitialState: function getInitialState() {
	        return { dataList: [] };
	    },

	    onAppStoreChange: function onAppStoreChange() {},

	    componentDidMount: function componentDidMount() {},

	    componentWillUnmount: function componentWillUnmount() {},

	    onClickTab: function onClickTab(index) {},

	    render: function render() {
	        var state = this.state;
	        var dataList = state.dataList || [];
	        return React.createElement(
	            "div",
	            { className: "cp-home" },
	            _.map(dataList, function (d) {
	                return React.createElement(
	                    "div",
	                    { className: "cp-item" },
	                    React.createElement(
	                        "h3",
	                        null,
	                        d.title
	                    ),
	                    React.createElement(
	                        "div",
	                        null,
	                        d.message
	                    )
	                );
	            })
	        );
	    }
	});

	module.exports = MsgPage;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ = __webpack_require__(3);
	var React = __webpack_require__(1);

	var PicPage = React.createClass({
	    displayName: "PicPage",

	    getInitialState: function getInitialState() {
	        return { dataList: [] };
	    },

	    onAppStoreChange: function onAppStoreChange() {},

	    componentDidMount: function componentDidMount() {},

	    componentWillUnmount: function componentWillUnmount() {},

	    onClickTab: function onClickTab(index) {},

	    render: function render() {
	        var state = this.state;
	        var dataList = state.dataList || [];
	        return React.createElement(
	            "div",
	            { className: "cp-home" },
	            _.map(dataList, function (d) {
	                return React.createElement(
	                    "div",
	                    { className: "cp-item" },
	                    React.createElement(
	                        "h3",
	                        null,
	                        d.title
	                    ),
	                    React.createElement(
	                        "div",
	                        null,
	                        d.message
	                    )
	                );
	            })
	        );
	    }
	});

	module.exports = PicPage;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ = __webpack_require__(3);
	var React = __webpack_require__(1);
	var AppCommon = __webpack_require__(6);
	var AppActions = __webpack_require__(4);

	var UserPage = React.createClass({
	    displayName: "UserPage",

	    getInitialState: function getInitialState() {
	        return {
	            loginMsg: ""
	        };
	    },

	    onAppStoreChange: function onAppStoreChange() {},

	    componentDidMount: function componentDidMount() {},

	    componentWillUnmount: function componentWillUnmount() {},

	    onClickLogin: function onClickLogin() {
	        var x = this.refs.username.getDOMNode();
	        var y = this.refs.password.getDOMNode();
	        AppActions.onClickLogin(x.value, y.value);
	    },

	    onClickLogout: function onClickLogout(currentUser) {
	        AppActions.onClickLogout(currentUser);
	    },

	    render: function render() {
	        var state = this.state;
	        var props = this.props;
	        var currentUser = props.currentUser;

	        var loginBox = React.createElement(
	            "div",
	            { className: "cp-user-login" },
	            React.createElement(
	                "div",
	                { className: "cp-input cp-line" },
	                React.createElement(
	                    "label",
	                    null,
	                    React.createElement(
	                        "span",
	                        null,
	                        "用户名"
	                    ),
	                    React.createElement("input", { type: "text", ref: "username" })
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "cp-input cp-line" },
	                React.createElement(
	                    "label",
	                    null,
	                    React.createElement(
	                        "span",
	                        null,
	                        "密 码 "
	                    ),
	                    React.createElement("input", { type: "password", ref: "password" })
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "cp-msg" },
	                state.loginMsg
	            ),
	            React.createElement(
	                "div",
	                { className: "cp-line" },
	                React.createElement(
	                    "span",
	                    { className: "cp-btn1", onClick: this.onClickLogin.bind(this) },
	                    " 登 录 "
	                )
	            )
	        );

	        var userInfo;
	        if (currentUser) {
	            userInfo = React.createElement(
	                "div",
	                null,
	                React.createElement(
	                    "div",
	                    { className: "cp-line" },
	                    React.createElement(
	                        "span",
	                        null,
	                        "昵称"
	                    ),
	                    React.createElement(
	                        "span",
	                        null,
	                        currentUser.nickname
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "cp-line" },
	                    React.createElement(
	                        "span",
	                        null,
	                        "昵称"
	                    ),
	                    React.createElement("img", { src: AppCommon.contextURL + currentUser.avatar })
	                ),
	                React.createElement(
	                    "div",
	                    { className: "cp-line" },
	                    React.createElement(
	                        "span",
	                        null,
	                        "mail"
	                    ),
	                    React.createElement(
	                        "span",
	                        null,
	                        currentUser.mail
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "cp-line" },
	                    React.createElement(
	                        "span",
	                        { className: "cp-btn1", onClick: this.onClickLogout.bind(this, currentUser) },
	                        " 退出 "
	                    )
	                )
	            );
	        }

	        return React.createElement(
	            "div",
	            { className: "cp-view-user" },
	            currentUser ? userInfo : loginBox
	        );
	    }
	});

	module.exports = UserPage;

/***/ }
/******/ ]);