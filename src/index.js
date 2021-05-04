const http = require("http");

http.createServer((req, res) => {
    res.write(req.headers["do-connecting-ip"] || "no-ip");
    res.end();
}).listen(3000);