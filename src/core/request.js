/**
 * Request module for AJAX
 * TODO: support more methods
 * TODO: cover it by unittests
 */
define('request', [], function (require, module) {

    var cache = {};

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
        paramsArray.forEach(function (paramExpr) {
            var param = decodeURI(paramExpr).split('=');
            params[param[0]] = param[1];
        });
        return params;
    }



    function request(url, opts) {
        assert(!!Promise, 'Promise API is not available');
        opts = opts || {};

        if (opts.data) {
            url = url + '?' + paramEncode(opts.data);
        }

        if (opts.cache) {
            if (cache[url]) {
                return cache[url];
            }
        }

        var xhr = new XMLHttpRequest();
        xhr.open(opts.method || 'GET', encodeURI(url));

        var promise = new Promise(function (resolve, reject) {
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve(xhr.responseText, xhr);
                } else {
                    reject('', xhr);
                }
            };
            xhr.send();
        });
        if (opts.cache && opts.method !== 'POST') {
            cache[url] = promise;
        }
        return promise;
    }

    module.exports = request;
    module.exports.paramEncode = paramEncode;
    module.exports.paramDecode = paramDecode;
    module.exports.params = paramDecode();
});
