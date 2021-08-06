var express = require('express');
var router = express.Router();
var axios = require('axios');
var getInitOrders = require('../json/getInitOrders.json');
var baseURL = 'http://yapi.smart-xwork.cn';
// var getInitOrders = require('../json/getInitOrders.json');
var resdata =async ()=>{
  var data =await axios.get(`${baseURL}/mock/82363/api/getInitOrders?userId=1`).catch(err=>{
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
    resolve(resdata());
  }).then((res)=>{
    var data = res.data;
    return data;
  }).then((json)=>{
  console.log(json);
  res.send(json);
  })
})


router.route('/test').get((req,res)=>{
new Promise((resolve,reject)=>{
    resolve(resdata());
  }).then((res)=>{
    var data = res.data;
    return data;
  }).then((json)=>{
  console.log(json);
  json.msg="userId=1";
  res.send(json);
  })

})
module.exports = router;
