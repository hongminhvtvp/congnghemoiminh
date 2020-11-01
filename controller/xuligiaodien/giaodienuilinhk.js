const express=require('express');


const dynamoose = require('dynamoose');

var dskh=require('./addkhbk');

module.exports.linktrangtru=function(req,res){
    //allbangtao.taobangbk;
   // allbangtao.themdulieukhachhang;

   res.render('trangtru');
}
module.exports.linkdatve=function(req,res){

    res.render('datve');
}

module.exports.linkdangnhap=function(req,res){

    res.render('dangnhap');
}

module.exports.linkdangky=function(req,res){

    res.render('dangky');
}
// module.exports.loaddatabase= function(req,res){
//     var listkh=dskh.scan().all(1);
   
//     res.reder("thongke",{
//         listkh: listkh
//     });
// };
