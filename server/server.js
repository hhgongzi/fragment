//nodejs express 起本地服务器
var useProxy = false;
var mainPath = "F:/www/Others/simdata/hrhb";
// var mainPath = "F:/www/Others/simdata/";

//模拟get post 后台
var express = require("express");
var proxy = require('express-http-proxy');
var bodyParser = require("body-parser");
var os = require("os");
var fs = require("fs");
const ifaces = os.networkInterfaces();
//app
var app = express();
if (useProxy) {
    app.use('/', proxy('api.test.hrhbbx.com', {
        proxyReqPathResolver: function (req) {
            return new Promise(function (resolve, reject) {
                resolve(require('url').parse(req.url).path);
            });
        }
    }));
} else {
    //静态
    app.use(express.static("../qianduan"));
    //设置允许跨域访问该服务.
    app.all('*', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Headers', '*');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Content-Type', 'application/json;charset=utf-8');

        next();
    });
    //GET
    app.get("/getdata", function (req, res) { //固定url,接口名在参数中传递
        console.log(req.query);
        // res.jsonp({a:1,b:2})
        // res.send(req.query.jsonp+"({text:'响应内容'})");
        res.json({ a: 1, b: 2 });
    });
    app.get("/dedata", function (req, res) {
        res.send(RSA.pubRSA.encrypt("{a:1}", "base64"))
    });

    //POST
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.post("/postdata", function (req, res) {//固定url,接口名在参数中传递
        console.log(req.body)
        fs.readFile(mainPath + req.body.ACTION + (req.body.type ? req.body.type : "") + ".json", function (err, data) {
            if (err) {
                res.send(err);
                return;
            }
            res.end(data);
        });
    });

    app.use(function (req, res) { //url即为接口名 GET or POST
        fs.readFile(mainPath + req.path + ".json", function (err, data) {
            if (err) {
                res.send(err);
                return;
            }
            res.end(data);
        });
    })
};

//listen
const s = app.listen(5555, function () {
    // console.log(s)
    // console.log(JSON.stringify(s));
    switch (true) {
        case !!ifaces["无线网络连接"]:
            console.log("LISTEN=> " + ifaces["无线网络连接"][1].address + ":" + s.address().port);
            break;
        case !!ifaces["以太网"]:
            console.log("LISTEN=> " + ifaces["以太网"][1].address + ":" + s.address().port);
            break;
        default:
            console.log(ifaces)
    };
});