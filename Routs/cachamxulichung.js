const express=require('express');
const routxl=express.Router();
const aws=require('aws-sdk');
const dynamoose = require('dynamoose');
const addkhxl=require('../controller/xuligiaodien/addkhbk');

const docfile=require('fs');

aws.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
});

let docClient = new aws.DynamoDB.DocumentClient();


// const loadallkh=require('../controller/xuligiaodien/loadkh');



// routxl.get('/dskh',function(req,res){

//     // loadallkh
   
//     //var listkh=khvtc.scan().all(1);
//     //var x=listkh

   
//     res.render("loaddskhachhang",{
        
//         listkh:listkh
//     });
// });


// module.exports=routxl;

module.exports.listTable=function(obj,res){
       var dstk=[];
       
       // var erx="lỗi";
       // var ronga="không có gì để hiển thị";
        if(obj.err){
        
            res.render('loaddskhachhang',{
                    loi:" erx+obj.err"
            });
        }else {
            if(obj.data.Items.length === 0){
                res.render('loaddskhachhang',{
                    rong:"không có gì để hiển thị"
                }
                  
                );
            }
            // obj.data.Items.forEach(element => {

            //         dstk.push(element.TaiKhoan);
                   
            // });

            // dstk.forEach(function(i){

            //     console.log('Mảng '+  i.username);
            // });

            res.render('loaddskhachhang', {
                
                dsx:obj.data.Items,
              
            });
        }


};


module.exports.createItem=function(makh, tenkh, cmnd, email,diachi,gioitinh,sdt,username,password, res) {
    let paramskt = {
    TableName: 'KhachHang',
            Item: {                        
                        makh:String(makh),
                        tenkh:String(tenkh),
                        cmnd:String(cmnd),
                        email:String(email),
                        diachi:String(diachi),
                        gioitinh:String(gioitinh),
                        sdt:String(sdt),
                        TaiKhoan:
                        {
                            username:String(username),
                            password:String(password)
                        }
                    }
    };
        docClient.put(paramskt, (err, data) => {
        if (err) {
            //form_functions.addNewForm(res);
            // res.write('<h5 style="color:red;">All fields are required!</h5>');
                res.render('/dangky' ,{
                    loibk :"đăng ký thất bại"
                });     
        }
        else {

            //alert('Đăng Ký Tài Khoản Thành Công ');
        
                  res.redirect('/home');
        }
      
  });
}

module.exports.TimKiemTheousername=function(username){
                
};




