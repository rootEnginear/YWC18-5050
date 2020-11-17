require("dotenv").config({ silent: process.env.NODE_ENV === "production" });
const express = require("express");
const request = require("request");

const app = express();
app.get("/", function (_req, res) {
  request(process.env.API_SERVICE_URL).pipe(res);
});

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Starting proxy server at ${process.env.HOST}:${process.env.PORT}`);
});
