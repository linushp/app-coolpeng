var _ = require("_");
var React = require("react");
var AppActions = require("../AppActions");


var TopicPage = React.createClass({
    getInitialState: function () {
        return {dataList: []};
    },

    onAppStoreChange: function () {

    },

    componentDidMount: function () {

    },

    componentWillUnmount: function () {

    },

    onClickGoToPostList: function (topic) {
        AppActions.onClickGoToPostList(topic);
    },


    renderTopicList: function () {
        var that = this;
        var props = this.props;
        var topicList = props.topicList;

        if (!topicList) {
            AppActions.initTopicList();
            return (<div>加载中...</div>);
        }

        return (
            <div className="cp-topic">
                {
                    _.map(topicList, function (d) {
                        return (
                            <div className="cp-topic-item" onClick={that.onClickGoToPostList.bind(that,d)}>
                                <h3>{d.moduleName}</h3>
                                <div>{d.moduleDesc}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    },


    onClickGoToPostDetail: function (post) {
        AppActions.onClickGoToPostDetail(post);
    },

    goBackToTopicList: function () {
        AppActions.goBackToTopicList();
    },

    renderPostList: function () {
        var that = this;
        var props = this.props;
        var postListPage = props.postListPage || {};
        var postList = postListPage.pageData || [];

        return (
            <div className="cp-topic">
                <div onClick={that.goBackToTopicList.bind(that)}>返回</div>
                {
                    _.map(postList, function (d) {
                        return (
                            <div className="cp-topic-item" onClick={that.onClickGoToPostDetail.bind(that,d)}>
                                <h3>{d.postTitle}</h3>
                                <div>{d.summary}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    },


    goBackToPostList:function(){
        AppActions.goBackToPostList();
    },

    renderPostDetail: function () {
        var that = this;
        var props = this.props;
        var postDetail = props.postDetail ||{};
        var replyPageResult = postDetail.replyPageResult ||{};
        var replyList = replyPageResult.pageData || [];
        var replyListDOM = _.map(replyList,function(r){
            return (
                <div>
                    <h2>{r.createTime}</h2>
                    <div dangerouslySetInnerHTML={{__html: r.replyContent}}></div>
                </div>
            );
        });
        if(postDetail){
            return (
                <div className="postDetail">
                    <b onClick={that.goBackToPostList.bind(that,postDetail)}>返回</b>
                    <h1>{postDetail.postTitle}</h1>
                    <div dangerouslySetInnerHTML={{__html: postDetail.postContent}}></div>
                    <div>
                        {replyListDOM}
                    </div>
                    <div style={{height:"60px"}}></div>
                </div>
            );
        }else {
            return (<div>加载中...</div>)
        }
    },


    render: function () {

        var state = this.state;
        var props = this.props;
        var topicPage = props.topicPage;
        if (topicPage === "topicList") {
            return this.renderTopicList();
        }
        else if (topicPage === "postListPage") {
            return this.renderPostList();
        }
        else if (topicPage === "postDetail") {
            return this.renderPostDetail();
        }
        else {
            return this.renderTopicList();
        }

    }
});


module.exports = TopicPage;