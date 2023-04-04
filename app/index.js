const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("HELLO"));
app.listen(80, () => console.log("Listen port 80"));
