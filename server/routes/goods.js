var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('./../models/goods')

mongoose.connect("mongodb://dn_dba:pwd_song@101.200.129.112:27017/vue_shop_lesson", {auto_reconnect: true});

mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.")
});

/*
查询商品列表数据
 */
/* GET users listing. */
router.get('/', function(req, res, next) {
  Goods.find({},function (err, doc) {
    if(err){
      res.json({
        status: '1',
        msg: err.message
      })
    }else{
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
});

module.exports = router;
