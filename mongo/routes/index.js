var express = require('express');
var router = express.Router();
var UsrModel = require("../model/Usr");
var GoodsModel = require("../model/Goods");
var multiparty = require("multiparty");
//var MongoClient = require("mongodb").MongoClient;

//var DB_CONN_STR = 'mongodb://localhost:27017/h1723';
//var collection = func

/* 请求页面 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* 登录页面 */
router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' });
});


/*登录信息验证*/
router.post('/api/login4ajax', function(req, res, next) {
	/* 获取前端发送的参数*/
	var usrname = req.body.usrname;
	var psw = req.body.psw;
	console.log(usrname,psw)
	var result = {
		code: 1,
		message: "登录成功"
	};
	/*调用modul查询数据*/
	UsrModel.find({usrname: usrname, psw:psw}, (err, docs)=>{
		if(docs.length == 0) {
//			console.log(usrname,psw)
//			console.log(docs)
			result.code = -101;
			result.message = "您的账号或密码错误。请重新登录。"
		} else {
			// 登录成功的时候，生成session
			req.session.usrname = usrname;
//			console.log(req.session);
		}
		res.json(result);
		//res.send("aaa")
	})
});
/*登录验证*****************************************/
router.get('/list', function(req, res, next) {
	//判断用户是否登录，如果没登录跳转到login页面。
//	console.log(req.session);
	if(req.session == null || req.session.usrname == null) {
		res.render('login', { title: '登录页面' });
		res.redirect("/login"); // 重定向
		return;
	}
		res.render('list', {title:'商品管理'});
	
});
/**********************获取数据库所有信息***********/
router.post('/api/goods_find', function(req, res, next) {
	/* 获取前端发送的参数*/
		var condition = req.body.condition;
		var pageNO = req.body.pageNO || 1;
			pageNO = parseInt(pageNO);
		var perPageCnt = req.body.perPageCnt || 10;
			perPageCnt = parseInt(perPageCnt);
/* 查询*/
	GoodsModel.count({flag: {$regex: condition}}, function(err, count){
		//console.log("数量:" + count);
     var body = GoodsModel.find({flag: {$regex: condition}}).skip((pageNO-1)*perPageCnt).limit(perPageCnt);
		body.exec(function(err, docs){
			//console.log(err, docs);
			var result = {
				total: count,
				data: docs,
				pageNO: pageNO
			};
			res.json(result);
		});
	})
});

/*******************************************************/
router.post('/first', function(req, res, next) {
  res.json({name:'aaa',pwd:'123'});
});
/***************************************/
module.exports = router;
