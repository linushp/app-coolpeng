var _ = require("_");
var $ = require("jQuery");

var contextURL = "http://192.168.0.105:9090/coolpeng";


var AppCommon = {
    contextURL:contextURL,
    toQueryParam: function (paramObject) {
        var paramArray = _.map(paramObject, function (value, key) {
            return key + "=" + encodeURIComponent(value);
        });
        if (paramArray && paramArray.length > 0) {
            return "?" + paramArray.join("&");
        }
        return "";
    },

    ajax: function (url) {
        var config = {
            url: (contextURL + url),
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            type: "post",
            success: function (data) {
            },
            beforeSend: function(XMLHttpRequest) {
                var currentUser = localStorage.getItem("currentUser");
                if(currentUser && currentUser.length>0){
                    currentUser = JSON.parse(currentUser);
                    XMLHttpRequest.setRequestHeader("tmsApp.tokenId", currentUser.lastLoginToken);
                }else {
                    XMLHttpRequest.setRequestHeader("tmsApp.tokenId", "");
                }

                var device = window.device || {};
                XMLHttpRequest.setRequestHeader("tmsApp.device.platform", device.platform);
                XMLHttpRequest.setRequestHeader("tmsApp.device.uuid", device.uuid);
            }
        };

        var ajax = {
            config: config,
            params: function (params) {
                var _this = this;
                var str = AppCommon.toQueryParam(params);
                _this.config.url = _this.config.url + str;
                return _this;
            },
            data: function (data) {
                var _this = this;
                _this.config.data = JSON.stringify(data);
                return _this;
            },
            request: function (callback) {
                var _this = this;
                _this.config.success = callback;
                return $.ajax(_this.config);
            }
        };

        ajax.req = ajax.request;
        return ajax
    }
};

window.AppCommon = AppCommon;

module.exports = AppCommon;
