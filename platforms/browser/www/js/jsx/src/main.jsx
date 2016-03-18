var React = require("react");


var CpApp = React.createClass({
    getInitialState: function() {
        return {
            loading: true,
            tabIndex: 1,
            data: null
        };
    },

    componentDidMount:function() {
    },

    onClickTab:function(index){
        this.setState({
            tabIndex:index
        })
    },

    render: function() {
        var state= this.state;
            return (
                <div className="cp-page">
                    <div class="cp-nav">
                        {state.tabIndex}
                    </div>
                    <div class="cp-view">
                        
                    </div>
                    <div className="cp-tabs">
                        <div className="cp-tabs2">
                            <div className={state.tabIndex==0?"tab on":"tab"} onClick={()=>this.onClickTab(0)}>首页</div>
                            <div className={state.tabIndex==1?"tab on":"tab"} onClick={()=>this.onClickTab(1)}>进吧</div>
                            <div className={state.tabIndex==2?"tab on":"tab"} onClick={()=>this.onClickTab(2)}>消息</div>
                            <div className={state.tabIndex==3?"tab on":"tab"} onClick={()=>this.onClickTab(3)}>我的</div>
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