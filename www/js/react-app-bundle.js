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
	var AppActions = __webpack_require__(6);
	var AppCommon = __webpack_require__(4);

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

	        var viewPage;
	        if (state.tabIndex == 0) {
	            viewPage = React.createElement(
	                "div",
	                { className: ["cp-view-p", "cp-view0", "on"].join(" ") },
	                React.createElement(
	                    HomePage,
	                    null,
	                    " "
	                )
	            );
	        } else if (state.tabIndex == 1) {
	            viewPage = React.createElement(
	                "div",
	                { className: ["cp-view-p", "cp-view1", "on"].join(" ") },
	                React.createElement(
	                    TopicPage,
	                    { topicList: state.topicList, postListPage: state.postListPage, postDetail: state.postDetail, topicPage: state.topicPage },
	                    " "
	                )
	            );
	        } else if (state.tabIndex == 2) {
	            viewPage = React.createElement(
	                "div",
	                { className: ["cp-view-p", "cp-view2", "on"].join(" ") },
	                React.createElement(
	                    MsgPage,
	                    null,
	                    " "
	                )
	            );
	        } else if (state.tabIndex == 3) {
	            viewPage = React.createElement(
	                "div",
	                { className: ["cp-view-p", "cp-view3", "on"].join(" ") },
	                React.createElement(
	                    PicPage,
	                    null,
	                    " "
	                )
	            );
	        } else if (state.tabIndex == 4) {
	            viewPage = React.createElement(
	                "div",
	                { className: ["cp-view-p", "cp-view4", "on"].join(" ") },
	                React.createElement(
	                    UserPage,
	                    { currentUser: state.currentUser },
	                    " "
	                )
	            );
	        }

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
	                viewPage,
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
	var AppCommon = __webpack_require__(4);
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
	        currentUser: AppCommon.getDataFromLocalStorage("currentUser"),
	        topicList: AppCommon.getDataFromLocalStorage("topicList"),
	        topicPage: "topicList", //topicList,postListPage,postDetail
	        postListPage: [],
	        postDetail: null
	    },

	    getALL: function getALL() {
	        return this.data;
	    },

	    setData: function setData(dataKey, dataValue, isUserLocalStorage) {
	        this.data[dataKey] = dataValue;
	        if (isUserLocalStorage) {
	            AppCommon.setDataToLocalStorage(dataKey, dataValue);
	        }
	    },

	    setTopicPage: function setTopicPage(topicPage) {
	        AppStore.setData("topicPage", topicPage, false);
	    },

	    setCurrentUser: function setCurrentUser(currentUser) {
	        AppStore.setData("currentUser", currentUser, true);
	    },

	    setTopicList: function setTopicList(topicList) {
	        AppStore.setData("topicList", topicList, true);
	    },

	    setPostListPage: function setPostListPage(postListPage) {
	        AppStore.setData("postListPage", postListPage, false);
	    },

	    setPostDetail: function setPostDetail(postDetail) {
	        AppStore.setData("postDetail", postDetail, false);
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

	"use strict";

	var _ = __webpack_require__(3);
	var $ = __webpack_require__(5);

	//var contextURL = "http://192.168.0.105:9090/coolpeng";
	var contextURL = "http://www.coolpeng.cn";

	var AppCommon = {

	    /**
	     * 全局路径
	     */
	    contextURL: contextURL,

	    /**
	     * 转换成参数字符串
	     * @param paramObject
	     * @returns {*}
	     */
	    toQueryParam: function toQueryParam(paramObject) {
	        var paramArray = _.map(paramObject, function (value, key) {
	            return key + "=" + encodeURIComponent(value);
	        });
	        if (paramArray && paramArray.length > 0) {
	            return "?" + paramArray.join("&");
	        }
	        return "";
	    },

	    /**
	     * 从本地存储中获取数据
	     * @param key
	     * @returns {null}
	     */
	    getDataFromLocalStorage: function getDataFromLocalStorage(key) {
	        var dataStr = localStorage.getItem(key);
	        if (dataStr && dataStr.length > 0) {
	            return JSON.parse(dataStr);
	        }
	        return null;
	    },

	    /**
	     * 设置本地存储中的数据
	     * @param key
	     * @param value
	     * @returns {null}
	     */
	    setDataToLocalStorage: function setDataToLocalStorage(key, value) {
	        if (value) {
	            value = JSON.stringify(value);
	            localStorage.setItem(key, value);
	        } else {
	            localStorage.removeItem(key);
	        }
	    },

	    /**
	     * Ajax
	     * @param url
	     */
	    ajax: function ajax(url) {
	        var config = {
	            url: contextURL + url,
	            contentType: "application/json;charset=UTF-8",
	            dataType: "json",
	            type: "post",
	            success: function success(data) {},
	            beforeSend: function beforeSend(XMLHttpRequest) {
	                var currentUser = AppCommon.getDataFromLocalStorage("currentUser");
	                if (currentUser) {
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
/* 5 */
/***/ function(module, exports) {

	module.exports = window.jQuery;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(3);

	var AppDispatcher = __webpack_require__(7);
	var AppStore = __webpack_require__(2);
	var AppCommon = __webpack_require__(4);

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
	    },

	    initTopicList: function initTopicList() {
	        AppCommon.ajax("/app/blog/getAllModuleList.json").req(function (d) {
	            if (d.responseCode === 0) {
	                AppStore.setTopicList(d.data);
	                AppStore.emitChange();
	            } else {
	                alert(d.responseText);
	            }
	        });
	    },

	    goBackToTopicList: function goBackToTopicList() {
	        AppStore.setTopicPage("topicList");
	        AppStore.emitChange();
	    },

	    onClickGoToPostList: function onClickGoToPostList(topic) {
	        var moduleId = topic.id;
	        AppStore.setTopicPage("postListPage");
	        AppCommon.ajax("/app/blog/getPostList.json").params({ moduleId: moduleId, pageSize: 10, pageNumber: 1 }).req(function (d) {
	            if (d.responseCode === 0) {
	                AppStore.setPostListPage(d.data);
	                AppStore.emitChange();
	            } else {
	                alert(d.responseText);
	            }
	        });
	    },

	    onClickGoToPostDetail: function onClickGoToPostDetail(post) {
	        var postId = post.id;
	        AppStore.setTopicPage("postDetail");
	        AppCommon.ajax("/app/blog/getPostWithReply.json").params({ postId: postId, pageSize: 10, pageNumber: 1 }).req(function (d) {
	            if (d.responseCode === 0) {
	                AppStore.setPostDetail(d.data);
	                AppStore.emitChange();
	            } else {
	                alert(d.responseText);
	            }
	        });
	    },

	    goBackToPostList: function goBackToPostList() {
	        AppStore.setTopicPage("postListPage");
	        AppStore.emitChange();
	    }

	};

	module.exports = AppActions;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by user1 on 2016/3/18.
	 */

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
	var AppActions = __webpack_require__(6);

	var TopicPage = React.createClass({
	    displayName: "TopicPage",

	    getInitialState: function getInitialState() {
	        return { dataList: [] };
	    },

	    onAppStoreChange: function onAppStoreChange() {},

	    componentDidMount: function componentDidMount() {},

	    componentWillUnmount: function componentWillUnmount() {},

	    onClickGoToPostList: function onClickGoToPostList(topic) {
	        AppActions.onClickGoToPostList(topic);
	    },

	    renderTopicList: function renderTopicList() {
	        var that = this;
	        var props = this.props;
	        var topicList = props.topicList;

	        if (!topicList) {
	            AppActions.initTopicList();
	            return React.createElement(
	                "div",
	                null,
	                "加载中..."
	            );
	        }

	        return React.createElement(
	            "div",
	            { className: "cp-topic" },
	            _.map(topicList, function (d) {
	                return React.createElement(
	                    "div",
	                    { className: "cp-topic-item", onClick: that.onClickGoToPostList.bind(that, d) },
	                    React.createElement(
	                        "h3",
	                        null,
	                        d.moduleName
	                    ),
	                    React.createElement(
	                        "div",
	                        null,
	                        d.moduleDesc
	                    )
	                );
	            })
	        );
	    },

	    onClickGoToPostDetail: function onClickGoToPostDetail(post) {
	        AppActions.onClickGoToPostDetail(post);
	    },

	    goBackToTopicList: function goBackToTopicList() {
	        AppActions.goBackToTopicList();
	    },

	    renderPostList: function renderPostList() {
	        var that = this;
	        var props = this.props;
	        var postListPage = props.postListPage || {};
	        var postList = postListPage.pageData || [];

	        return React.createElement(
	            "div",
	            { className: "cp-topic" },
	            React.createElement(
	                "div",
	                { onClick: that.goBackToTopicList.bind(that) },
	                "返回"
	            ),
	            _.map(postList, function (d) {
	                return React.createElement(
	                    "div",
	                    { className: "cp-topic-item", onClick: that.onClickGoToPostDetail.bind(that, d) },
	                    React.createElement(
	                        "h3",
	                        null,
	                        d.postTitle
	                    ),
	                    React.createElement(
	                        "div",
	                        null,
	                        d.summary
	                    )
	                );
	            })
	        );
	    },

	    goBackToPostList: function goBackToPostList() {
	        AppActions.goBackToPostList();
	    },

	    renderPostDetail: function renderPostDetail() {
	        var that = this;
	        var props = this.props;
	        var postDetail = props.postDetail || {};
	        var replyList = postDetail.pageData || [];
	        var replyListDOM = _.map(replyList, function (r) {
	            return React.createElement(
	                "div",
	                null,
	                React.createElement(
	                    "h2",
	                    null,
	                    r.createTime
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    r.replyContent
	                )
	            );
	        });
	        if (postDetail) {
	            return React.createElement(
	                "div",
	                { className: "postDetail" },
	                React.createElement(
	                    "b",
	                    { onClick: that.goBackToPostList.bind(that, postDetail) },
	                    "返回"
	                ),
	                React.createElement(
	                    "h1",
	                    null,
	                    postDetail.postTitle
	                ),
	                React.createElement("div", { dangerouslySetInnerHTML: { __html: postDetail.postContent } }),
	                React.createElement(
	                    "div",
	                    null,
	                    replyListDOM
	                )
	            );
	        } else {
	            return React.createElement(
	                "div",
	                null,
	                "加载中..."
	            );
	        }
	    },

	    render: function render() {

	        var state = this.state;
	        var props = this.props;
	        var topicPage = props.topicPage;
	        if (topicPage === "topicList") {
	            return this.renderTopicList();
	        } else if (topicPage === "postListPage") {
	            return this.renderPostList();
	        } else if (topicPage === "postDetail") {
	            return this.renderPostDetail();
	        } else {
	            return this.renderTopicList();
	        }
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
	var AppCommon = __webpack_require__(4);
	var AppActions = __webpack_require__(6);

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
	                    React.createElement("input", { type: "text", ref: "username", value: "luanhaipeng" })
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
	                    React.createElement("input", { type: "password", ref: "password", value: "xiaozhu123!" })
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