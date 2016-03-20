var _ = require("_");

var AppDispatcher = require('./AppDispatcher');
var AppStore = require('./AppStore');
var AppCommon = require("./AppCommon");


var AppActions = {
    onClickTab:function(tabIndex,tabName){
        AppStore.setTabIndex(tabIndex);
        AppStore.setTitle(tabName);
        AppStore.emitChange();
    },

    onClickLogin:function(username,password){
        AppCommon.ajax("/app/user/login.json").params({username: username, password:password}).req(function (d) {
            if (d.responseCode === 0) {
                AppStore.setCurrentUser(d.data);
                AppStore.emitChange();
            }else {
                alert(d.responseText);
            }
        });
    },
    onClickLogout:function(currentUser){
        var tokenId = currentUser.lastLoginToken ||"";
        AppCommon.ajax("/app/user/logout.json").params({tokenId:tokenId}).req(function (d) {
            if (d.responseCode === 0) {
                AppStore.setCurrentUser(null);
                AppStore.emitChange();
            }else {
                alert(d.responseText);
            }
        });
    },


    initTopicList:function(){
        AppCommon.ajax("/app/blog/getAllModuleList.json").req(function (d) {
            if (d.responseCode === 0) {
                AppStore.setTopicList(d.data);
                AppStore.emitChange();
            }else {
                alert(d.responseText);
            }
        });
    },

    onClickGoToTopicList:function(){
        AppStore.setTopicPage("topicList");
        AppStore.emitChange();
    },

    onClickGoToPostList:function(topic){
        var moduleId = topic.id;
        AppStore.setTopicPage("postListPage");
        AppCommon.ajax("/app/blog/getPostList.json").params({moduleId:moduleId, pageSize:10, pageNumber:1}).req(function (d) {
            if (d.responseCode === 0) {
                AppStore.setPostListPage(d.data);
                AppStore.emitChange();
            }else {
                alert(d.responseText);
            }
        });
    }

};


module.exports = AppActions;
