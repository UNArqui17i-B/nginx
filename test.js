const http = require('http');

function serve(ip, port) {
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(JSON.stringify(req.headers));
        res.end("\nThere's no place like "+ip+":"+port+"\n");
    }).listen(port, ip);
    console.log('Server running at http://'+ip+':'+port+'/');
}

// Create three servers for
// the load balancer, listening on any
// network on the following three ports
serve('0.0.0.0', 4002);
serve('0.0.0.0', 4001);

//DB_PORT="5984" DB_URL="users-db" HOST_PORT="4002"