var _ = require("_");
var React = require("react");



var MsgPage = React.createClass({
    getInitialState: function() {
        return {dataList:[]};
    },

    onAppStoreChange:function(){

    },

    componentDidMount: function() {

    },

    componentWillUnmount: function() {

    },

    onClickTab:function(index){

    },


    render: function() {
        var state= this.state;
        var dataList = state.dataList || [];
        return (
            <div className="cp-home">
                {
                    _.map(dataList,function(d){
                        return (
                            <div className="cp-item">
                                <h3>{d.title}</h3>
                                <div>{d.message}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
});


module.exports = MsgPage;