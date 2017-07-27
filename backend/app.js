var express = require('express');
var mysql = require('mysql');
var bodyParse = require('body-parser');
var multer = require('multer');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var async=require('async');
var session = require('express-session');

app.set('views', __dirname);
app.set( 'view engine', 'html' );
app.engine( '.html', require( 'ejs' ).__express );

server.listen(9002);

//allow custom header and CORS
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.sendStatus(200); //让options请求快速返回
    }
    else {
        next();
    }
});

var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code:'1',
      msg:'操作失败'
    });
  }else {
    console.log(res);
    //res.json(ret);
  }
}
var myInterval,mySocket;
var pool = mysql.createPool({
  connectionLimit: 1000,
  host: '****',
  port: '****',
  protocol: 'mysql',
  user: '****',
  password:'****',
  database:'****'
});
function getTableData(res) {
  pool.getConnection(function(err,connection) {
    var tableSql = 'select * from dashboard';
    connection.query(tableSql, function(err, results, fields) {
        connection.release();
        if (err) {
          console.error("query data error");
          throw err;
        }else {
          jsonWrite(res,results);
        }
    });
  });
}
//websocket
io.of('/websocket/getTableData').on('connection',function(socket) {
  mySocket = socket;
});
setInterval(getTableData,3000);

//api接口
app.get('/api/getTableData', function(req, res) {
  getTableData(res);
});
