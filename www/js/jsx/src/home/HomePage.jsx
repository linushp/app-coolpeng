var _ = require("_");
var React = require("react");


var dataList = [

];

function addDataList(){
    dataList.push({
        name:"栾海鹏",
        title:"来说说龙珠不科学的地方",
        message:"来说说龙珠不科学的地方,来说说龙珠不科学的地方,来说说龙珠不科学的地方,来说说龙珠不科学的地方"
    })
}

for (var i = 0; i < 20; i++) {
    addDataList();
}


var HomePage = React.createClass({
    getInitialState: function() {
        return {dataList:dataList};
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


module.exports = HomePage;