const http = require("http");
const path = require("path");

const app = require(path.join(__dirname,"app"));

http.createServer(app).listen("8080","127.0.0.1",()=>
{
    console.log("Status: 200 (OK)");
});