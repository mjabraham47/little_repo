const express = require("express");
const app = express();
const https = require('https');

const options = {
  hostname: 'https://62b78ab6691dcea2733fe5d5.mockapi.io',
  port: 443,
  path: '/api/v1/supplier',
  method: 'GET',
};
app.post("/new_customer", function (req, res) {
  console.log(req.body)
});

// app.get("/", function (req, res) {
// });
app.get("/data", function (req, res) {
  https.request(options, response => {
    response.on('data', data => {
      res.send(data)
    });
  });
});

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});