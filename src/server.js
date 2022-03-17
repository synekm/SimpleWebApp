const http = require("http");
const path = require("path");
const { host, port } = require(path.join(__dirname, 'config'));
const server = http.createServer(require(path.join(__dirname, 'app')));

server.listen(port, host, () => {
    console.log("Status: 200 (OK), http://"+host+":"+port);
});