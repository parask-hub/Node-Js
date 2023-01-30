const http = require("http");

http
  .createServer((req, res) => {
    res.write("<h2>Hello There</h2>");
    res.end();
  })
  .listen(3800);
