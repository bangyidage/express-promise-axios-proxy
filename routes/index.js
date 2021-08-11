var express = require('express');
var router = express.Router();
var axios = require('axios');
var getInitOrders = require('../json/getInitOrders.json');
var baseURL = 'http://yapi.smart-xwork.cn';
// var getInitOrders = require('../json/getInitOrders.json');
var resdata =async (url)=>{
  var data =await axios.get(`${baseURL}/mock/82363/api${url}`).catch(err=>{
    console.log(err);
    return err;
  });
  return data;
}
/* GET home page. */
router.get('/',function(req,res){
res.send(getInitOrders);
});
router.route('/getInitOrders').get((req,res)=>{
  new Promise((resolve,reject)=>{
    resolve(resdata('/getInitOrders'));
  }).then((res)=>{
    var data = res.data;
    return data;
  }).then((json)=>{

  res.send(json);
  })
})
router.route('/getCompleteOrders').get((req,res)=>{
  const {orders,counts} = req.query;
  if(!orders || !counts){
    res.send({
      "code":110,
      "data":"失败"
    })
  }
  new Promise((resolve,reject)=>{
    resolve(resdata(`/getCompleteOrders?counts=${counts}&orders=${orders}`));
  }).then((res)=>{
    var data = res.data;
    return data;
  }).then((json)=>{

  res.send(json);
  }).catch(err=>{

  })
})
module.exports = router;
