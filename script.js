const express = require("express");
const app = express();

app.use(express.static("views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3002;

const userName = "nodeproject@gmail.com";
const password = "123";

app.post("/login", (req, res) => {
  if (req.body.email === userName && req.body.password === password) {
    res.send("<h1>logged in</h1>");
  } else {
    res.send("<h1>Invalid user</h1>");
  }
});
app.listen(PORT);
