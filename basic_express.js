const express = require("express");
const path = require("path");

const app = express();

//   console.log(req.query.name);
//   res.send(
//     `<h2>Hello This is Home Page </h2><br> <a href="/about">Go to About </a> `
//   );
// });

// app.get("/about", (req, res) => {
//   res.send("hello this is about us page");
// });

const publicpath = path.join(__dirname, "public");
app.use(express.static(publicpath));

app.listen(4000);
