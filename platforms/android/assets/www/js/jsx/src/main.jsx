var React = require("react");


var CpApp = React.createClass({
    getInitialState: function() {
        return {
            loading: true,
            tab: 1,
            data: null
        };
    },

    componentDidMount:function() {
    },

    render: function() {
            return (
                <div className="cp-page">
                    <h1>Most Popular JavaScript Projects in Github</h1>
                    <div className="cp-tabs">
                        <div className="cp-tabs2">
                            <div className={this.state.tab==0?"tab on":"tab"} >通讯</div>
                            <div className={this.state.tab==1?"tab on":"tab"}  >待办</div>
                            <div className={this.state.tab==2?"tab on":"tab"} >记账</div>
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