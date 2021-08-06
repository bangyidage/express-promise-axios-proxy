var express = require('express');
var router = express.Router();
var axios = require('axios');
// var getInitOrders = require('../json/getInitOrders.json');
var resdata =async ()=>{
  var data =await axios.get('http://yapi.smart-xwork.cn/mock/82363/api/getCompleteOrders').then(res=>{
    console.log('res');
    return res.data;
  }).catch(err=>{
    console.log("err");
    return err;
  });
  return data;
}
/* GET home page. */
router.get('/',function(req,res){
// console.log('1');
  new Promise((resolve,reject)=>{
    resolve(resdata());
  }).then(r=>{
    console.log('r:',r);
    res.send(r);
  })
  
});
// router.route('/getInitOrders').get((req,res)=>{
//   var r =  new Promise((resolve,rejects)=>{
//     resolve(resdata)
//   })
//   // console.log(req);
//   // res.send(getInitOrders);
// })
module.exports = router;
