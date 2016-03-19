var _ = require("_");
var React = require("react");
var AppCommon = require("../AppCommon");
var AppActions = require("../AppActions");


var UserPage = React.createClass({
    getInitialState: function () {
        return {
            loginMsg: ""
        };
    },

    onAppStoreChange: function () {

    },

    componentDidMount: function () {

    },

    componentWillUnmount: function () {

    },

    onClickLogin: function () {
        var x = this.refs.username.getDOMNode();
        var y = this.refs.password.getDOMNode();
        AppActions.onClickLogin(x.value, y.value);
    },

    onClickLogout:function(currentUser){
        AppActions.onClickLogout(currentUser);
    },

    render: function () {
        var state = this.state;
        var props = this.props;
        var currentUser = props.currentUser;

        var loginBox = (
            <div className="cp-user-login">
                <div className="cp-input cp-line">
                    <label>
                        <span>用户名</span>
                        <input type="text" ref="username"/>
                    </label>
                </div>
                <div className="cp-input cp-line">
                    <label>
                        <span>密&nbsp;码 </span>
                        <input type="password" ref="password"/>
                    </label>
                </div>
                <div className="cp-msg">{state.loginMsg}</div>
                <div className="cp-line">
                    <span className="cp-btn1" onClick={this.onClickLogin.bind(this)}> 登 录 </span>
                </div>
            </div>
        );

        var userInfo;
        if (currentUser) {
            userInfo = (
                <div>
                    <div className="cp-line">
                        <span>昵称</span>
                        <span>{currentUser.nickname}</span>
                    </div>
                    <div className="cp-line">
                        <span>昵称</span>
                        <img src={AppCommon.contextURL+currentUser.avatar}/>
                    </div>
                    <div className="cp-line">
                        <span>mail</span>
                        <span>{currentUser.mail}</span>
                    </div>
                    <div className="cp-line">
                        <span className="cp-btn1" onClick={this.onClickLogout.bind(this,currentUser)}> 退出 </span>
                    </div>
                </div>
            );
        }


        return (
            <div className="cp-view-user">
                {currentUser ? userInfo : loginBox}
            </div>
        );
    }
});


module.exports = UserPage;