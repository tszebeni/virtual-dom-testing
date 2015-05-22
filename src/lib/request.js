/**
 * Request module for AJAX
 * currently: GET sync
 * TODO: make it async
 * TODO: support more methods
 * TODO: cover it by unittests
 */
define('request', [], function (require, module, exports) {

    function paramEncode(object) {
        var encodedString = '';
        for (var prop in object) {
            if (object.hasOwnProperty(prop)) {
                if (encodedString.length > 0) {
                    encodedString += '&';
                }
                encodedString += encodeURI(prop + '=' + object[prop]);
            }
        }
        return encodedString;
    }

    function paramDecode(queryString) {
        var params = {};
        queryString = queryString || location.search.substring(1);
        var paramsArray = (queryString+'&').split('&');
        paramsArray.forEach(function (paramExpr, i) {
            var param = decodeURI(paramExpr).split('=');
            params[param[0]] = param[1];
        });
        return params;
    }



    var request = function request(url, data, cb) {
        if (!cb) {
            cb = data;
            data = null;
        }
        if (data) {
            url = url + '?' + paramEncode(data);
        }
        var xhr = new XMLHttpRequest();
        xhr.open('GET', encodeURI(url), false); // false -> synchron request!! TODO: implement promise
        xhr.onload = function() {
            if (xhr.status === 200) {
                cb(xhr.responseText, xhr);
            } else {
                cb('', xhr);
            }
        };
        xhr.send();
    };

    module.exports = request;
    module.exports.paramEncode = paramEncode;
    module.exports.paramDecode = paramDecode;
    module.exports.params = paramDecode();
});
