var express = require('express');

var app = express.createServer(),
io = require('socket.io').listen(app);

app.use(express.logger());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: "droidToChromeRMR" }));
app.use('/static', express.static(__dirname + '/static'));
app.set('views', __dirname + '/templates');

app.get('/', function(req, res){
  res.sendfile('templates/index.html');
});

app.listen(8000);

var spawn = require("child_process").spawn,
p = spawn('python', ['test.py'])
p.stdout.on("data", function(data) {
  console.log(data);
});
