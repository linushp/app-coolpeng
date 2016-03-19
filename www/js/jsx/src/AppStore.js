var _ = require("_");
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
        tabIndex: 0 ,
        currentUser:(function(){
            var currentUser = localStorage.getItem("currentUser");
            if(currentUser && currentUser.length>0){
                return JSON.parse(currentUser);
            }
            return null;
        })()
    },

    getALL: function () {
        return this.data;
    },

    setCurrentUser:function(currentUser){
        if(currentUser){
            this.data.currentUser = currentUser;
            currentUser = JSON.stringify(currentUser);
            localStorage.setItem("currentUser",currentUser);
        }else {
            this.data.currentUser = null;
            localStorage.removeItem("currentUser");
        }
    },

    setTabIndex:function(tabIndex){
        this.data.tabIndex = tabIndex;
    },


    setTitle: function (title) {
        this.data.title = title;
    },



    emitChange: function () {
        for (var i = 0; i < listeners.length; i++) {
            var obj = listeners[i];
            if(_.isFunction(obj)){
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
