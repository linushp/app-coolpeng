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


    onClickGoToPosDetail: function () {

    },

    onClickGoToTopicList: function () {
        AppActions.onClickGoToTopicList();
    },

    renderPostList: function () {
        var that = this;
        var props = this.props;
        var postListPage = props.postListPage || {};
        var postList = postListPage.pageData || [];

        return (
            <div className="cp-topic">
                <div onClick={that.onClickGoToTopicList.bind(that)}>返回</div>
                {
                    _.map(postList, function (d) {
                        return (
                            <div className="cp-topic-item" onClick={that.onClickGoToPosDetail.bind(that,d)}>
                                <h3>{d.postTitle}</h3>
                                <div>{d.summary}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    },


    renderPostDetail: function () {

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