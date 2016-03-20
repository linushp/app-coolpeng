var _ = require("_");
var AppCommon = require("./AppCommon");
var localStorage = window.localStorage;

var listeners = [];


var findListener = function (foo) {
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
        topicPage:"topicList", //topicList,postListPage,postDetail
        postListPage:[]
    },

    getALL: function () {
        return this.data;
    },

    setData:function(dataKey,dataValue,isUserLocalStorage){
        this.data[dataKey] = dataValue;
        if(isUserLocalStorage){
            AppCommon.setDataToLocalStorage(dataKey, dataValue);
        }
    },

    setTopicPage:function(topicPage){
        AppStore.setData("topicPage",topicPage,false);
    },

    setCurrentUser: function (currentUser) {
        AppStore.setData("currentUser",currentUser,true)
    },

    setTopicList: function (topicList) {
        AppStore.setData("topicList",topicList,true)
    },

    setPostListPage:function(postListPage){
        AppStore.setData("postListPage",postListPage,false);
    },



    setTabIndex: function (tabIndex) {
        this.data.tabIndex = tabIndex;
    },


    setTitle: function (title) {
        this.data.title = title;
    },


    emitChange: function () {
        for (var i = 0; i < listeners.length; i++) {
            var obj = listeners[i];
            if (_.isFunction(obj)) {
                obj();
            }
        }
    },

    addChangeListener: function (callback) {
        if (!findListener(callback)) {
            listeners.push(callback);
        }
    },

    removeChangeListener: function (callback) {
        listeners = _.reject(listeners, function (obj) {
            return obj == callback;
        });
    }

};


module.exports = AppStore;
