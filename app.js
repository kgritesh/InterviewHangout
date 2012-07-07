var express = require('express');

var app = express.createServer(),
spawn = require("child_process").spawn,
p = spawn('python', ['test.py'])
p.stdout.on("data", function(data) {
  console.log(data);
});

var express = require('express'),


var app = express.createServer();
var io = require('socket.io').listen(app);

app.use(express.logger());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: "droidToChromeRMR" }));

app.get('/', function(req, res){
    res.send("Hello World");
});

app.listen(8080);