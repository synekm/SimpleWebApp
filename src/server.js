const http = require("http");
const path = require("path");

const server = http.createServer(require(path.join(__dirname, 'app')));

server.listen(8000, "localhost", () => {
    console.log(`Status: 200 (OK), http://localhost:8000`);
});