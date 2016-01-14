var html2hscript = require('html2hscript');
var http = require('http');
var querystring = require('querystring');
var url = require('url') ;

var port = 8080;

function process(request, response, callback) {
    var queryData = "";
    if(typeof callback !== 'function') return null;

    if(request.method == 'POST') {
        request.on('data', function(data) {
            queryData += data;
            if(queryData.length > 1e6) {
                queryData = "";
                response.writeHead(413, {'Content-Type': 'text/plain'}).end();
                request.connection.destroy();
            }
        });
        request.on('end', function() {
            request.param = querystring.parse(queryData);
            callback();
        });
    } else {
        request.param = querystring.parse(url.parse(request.url).query);
        callback();
    }
}

http.createServer(function (req, res) {
    if (req.method === 'GET') {
        process(req, res, function() {
            if (!req.param.html) {
                res.writeHead(404, "Not found", {'Content-Type': 'text/plain'});
                res.end();
                return;
            }
            res.writeHead(200, "OK", {'Content-Type': 'application/javascript'});
            html2hscript(req.param.html, function (err, hscript) {
                res.write(req.param.callback + '(\'' + hscript + '\');');
                res.end();
            });
        });
    } else {
        res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
        res.end('html2hscipt server');
    }
}).listen(port);
