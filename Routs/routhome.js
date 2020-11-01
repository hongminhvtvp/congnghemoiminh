const express=require('express');
const app=express();
const routt=express.Router();
const aws=require('aws-sdk');
aws.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
});
let docClient = new aws.DynamoDB.DocumentClient();



const dynamoose = require('dynamoose');
const loadl=require('../loaddulieu');
const xlchung=require('./cachamxulichung');
const khvtc=require('../controller/xuligiaodien/addkhbk');
const addkhxl=require('../controller/xuligiaodien/addkhbk');
const  randomuuidv1 = require('uuid/v1');

const dssl=require('../controller/xuligiaodien/loadkh');
// const allbangtao=require('../controller/taocacbang/allbang');

// const usallitem=require('../controller/taocacbang/getallitem');
const xlgui=require('../controller/xuligiaodien/giaodienuilinhk');

routt.get('/',xlgui.linktrangtru);

// routt.get('/dskh',xlgui.loaddatabase);
routt.get('/datvemaybay',xlgui.linkdatve);

routt.get('/dangnhap',xlgui.linkdangnhap);
routt.get('/dangky',xlgui.linkdangky);

routt.get('/dskh',function(req,res){
    dssl.getAllItems(res);
});

routt.get('/xlformdangky',function(req,res){
    var opt={
        nsecs:123
    };
    var makh=randomuuidv1(opt);
    var tenkh=req.query.tenkh;
    var cmnd=req.query.cmnd;
    var email=req.query.email;
    var diachi=req.query.diachi;
    var gioitinh=req.query.gioitinh;
    var sdt=req.query.sdt;
    var username=req.query.username
    var password=req.query.password;
    xlchung.createItem(makh,tenkh,cmnd,email,diachi,gioitinh,sdt,username,password,res);

    // console.log('tên khách hàng:' + tenkh);

    // console.log( 'Thông tin :'+ makh + '' + tenkh +'' + cmnd + '' + email + '' + diachi + '' + gioitinh + '' + sdt + '' +  username + '' + password )


});

routt.post('/xldangnhap',function(req,res){
    var username=req.body.username +'';
    var pass=req.body.password;
    console.log('tk '+username);
    console.log('mk'+ pass);

    let params={
        TableName: "KhachHang"
    };
    let queryObject = {};
   
    params.FilterExpression= '#username = :username',
    params.ExpressionAttributeNames = { '#username': 'username' };
    params.ExpressionAttributeValues= {
             ':username': String(username)
    }
    console.log('A');
    docClient.scan(params, (err, data) => {
            if (err) {
                console.log('A1');
                queryObject.err = err;
                console.log(queryObject.err);
            } else {
                console.log('A2');
                queryObject.data = data;
            
                let TaiKhoan={};
                TaiKhoan=queryObject.data;
                console.log('gt' + queryObject.makh);
                 

            }
            console.log('A3'); 
    });
        // console.log('gt 1 :' +  queryObject.username );
        // console.log('gt 2 :' +  queryObject.username );
        // //console.log('gt 3 :' +  data );
     console.log('A4');
        
 });



    // addkhxl.scan(filterus).exec().then(function(err,data){
    //            console.log('kết quả ' + data);        
    // });


routt.get('/cookies',function(req,res){

});

module.exports = routt;


