const express = require("express");
const app = express();
const http = require("http").Server(app);

const io = require("socket.io")(http);

app.use("./routes/monitoreo.routes");

app.use(express.static(__dirname + "public"));
