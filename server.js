var http =require('http');
var url = require('url');
var remote = require('./remote');

function onConnect(req,resp){
    console.log(req.url);
    var pathname = url.parse(req.url).pathname;
    console.log('pathname : '+pathname);
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    remote.remote(resp,pathname);
    resp.write('\n');
    resp.write('Hello World\n');
    resp.end();
}


function start(){
    
    http.createServer(onConnect).listen('8888');
    
    console.log('Server start on port 8888');

}

exports.start = start;
