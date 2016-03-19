var React = require("react");
var AppStore = require("./AppStore");
var AppActions = require("./AppActions");
var AppCommon = require("./AppCommon");


var HomePage = require("./home/HomePage");
var TopicPage = require("./topic/TopicPage");
var MsgPage = require("./msg/MsgPage");
var PicPage = require("./pic/PicPage");
var UserPage = require("./user/UserPage");

var CpApp = React.createClass({
    getInitialState: function() {
        return AppStore.getALL();
    },

    onAppStoreChange:function(){
        this.setState(AppStore.getALL());
    },

    componentDidMount: function() {
        AppStore.addChangeListener(this.onAppStoreChange);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this.onAppStoreChange);
    },

    onClickTab:function(index,title){
        AppActions.onClickTab(index,title);
    },



    render: function() {
        var state = this.state;
            return (
                <div className="cp-page">
                    <div className="cp-nav">
                        {state.title}
                    </div>
                    <div className="cp-view">
                        <div className="cp-nav-p"></div>
                        <div className={["cp-view-p","cp-view0",state.tabIndex==0?"on":"off"].join(" ")}> <HomePage> </HomePage></div>
                        <div className={["cp-view-p","cp-view1",state.tabIndex==1?"on":"off"].join(" ")}> <TopicPage> </TopicPage> </div>
                        <div className={["cp-view-p","cp-view2",state.tabIndex==2?"on":"off"].join(" ")}> <MsgPage> </MsgPage> </div>
                        <div className={["cp-view-p","cp-view3",state.tabIndex==3?"on":"off"].join(" ")}> <PicPage> </PicPage> </div>
                        <div className={["cp-view-p","cp-view4",state.tabIndex==4?"on":"off"].join(" ")}> <UserPage currentUser={state.currentUser}> </UserPage> </div>
                        <div className="cp-tabs-p"></div>
                    </div>
                    <div className="cp-tabs">
                        <div className="cp-tabs2">
                            <div className={state.tabIndex==0?"tab on":"tab"} onClick={this.onClickTab.bind(this,0,"首页")}>首页</div>
                            <div className={state.tabIndex==1?"tab on":"tab"} onClick={this.onClickTab.bind(this,1,"话题")}>话题</div>
                            <div className={state.tabIndex==2?"tab on":"tab"} onClick={this.onClickTab.bind(this,2,"消息")}>消息</div>
                            <div className={state.tabIndex==3?"tab on":"tab"} onClick={this.onClickTab.bind(this,3,"图片")}>图片</div>
                            <div className={state.tabIndex==4?"tab on":"tab"} onClick={this.onClickTab.bind(this,4,"我的")}>我的</div>
                        </div>
                    </div>
                </div>
            );
    }
});







function reactAppRun(){
    React.render(
        <CpApp> </CpApp>,
        document.getElementById('react-app')
    );
}

window.reactAppRun = reactAppRun;