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
    getInitialState: function () {
        return AppStore.getALL();
    },

    onAppStoreChange: function () {
        this.setState(AppStore.getALL());
    },

    componentDidMount: function () {
        AppStore.addChangeListener(this.onAppStoreChange);
    },

    componentWillUnmount: function () {
        AppStore.removeChangeListener(this.onAppStoreChange);
    },

    onClickTab: function (index, title) {
        AppActions.onClickTab(index, title);
    },


    render: function () {
        var state = this.state;

        var viewPage;
        if (state.tabIndex == 0) {
            viewPage = (<div className={["cp-view-p","cp-view0","on"].join(" ")}><HomePage> </HomePage></div>);
        }
        else if (state.tabIndex == 1) {
            viewPage = <div className={["cp-view-p","cp-view1","on"].join(" ")}><TopicPage topicList={state.topicList} postListPage={state.postListPage}  topicPage={state.topicPage}> </TopicPage></div>;
        }
        else if (state.tabIndex == 2) {
            viewPage = <div className={["cp-view-p","cp-view2","on"].join(" ")}><MsgPage> </MsgPage></div>;
        }
        else if (state.tabIndex == 3) {
            viewPage = <div className={["cp-view-p","cp-view3","on"].join(" ")}><PicPage> </PicPage></div>
        }
        else if (state.tabIndex == 4) {
            viewPage = (<div className={["cp-view-p","cp-view4","on"].join(" ")}><UserPage currentUser={state.currentUser}> </UserPage></div> );
        }

        return (
            <div className="cp-page">
                <div className="cp-nav">
                    {state.title}
                </div>
                <div className="cp-view">
                    <div className="cp-nav-p"></div>
                    {viewPage}
                    <div className="cp-tabs-p"></div>
                </div>
                <div className="cp-tabs">
                    <div className="cp-tabs2">
                        <div className={state.tabIndex==0?"tab on":"tab"} onClick={this.onClickTab.bind(this,0,"首页")}>
                            首页
                        </div>
                        <div className={state.tabIndex==1?"tab on":"tab"} onClick={this.onClickTab.bind(this,1,"话题")}>
                            话题
                        </div>
                        <div className={state.tabIndex==2?"tab on":"tab"} onClick={this.onClickTab.bind(this,2,"消息")}>
                            消息
                        </div>
                        <div className={state.tabIndex==3?"tab on":"tab"} onClick={this.onClickTab.bind(this,3,"图片")}>
                            图片
                        </div>
                        <div className={state.tabIndex==4?"tab on":"tab"} onClick={this.onClickTab.bind(this,4,"我的")}>
                            我的
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


function reactAppRun() {
    React.render(
        <CpApp> </CpApp>,
        document.getElementById('react-app')
    );
}

window.reactAppRun = reactAppRun;