var express = require('express');
var app = express();
var http = require('http').createServer(app);
var path=require('path');
app.use(express.static(path.join(__dirname,'public/')));
app.get("/", function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});


http.listen(1993, function () {
    console.log('Listen on 1993');
})