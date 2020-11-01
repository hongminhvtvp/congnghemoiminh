// const aws = require('aws-sdk');
// const docfile = require('fs');
// const express=require('express');
// aws.config.update({
//         region: 'local',
//         endpoint: 'http://localhost:8000'
//     });

 

//     let khachhangds = JSON.parse(docfile.readFileSync('./data/khachhang.json', 'utf-8'));

//     let docClient = new aws.DynamoDB.DocumentClient();
//     khachhangds.forEach((kh) => {
//                 let dskh = {
//                             TableName: "KhachHang",
//                             Item: {
//                                 "makh":kh.makh,
//                                 "tenkh":kh.tenkh,
//                                 "cmnd":kh.cmnd,
//                                 "email":kh.email,
//                                 "diachi":kh.diachi,
//                                 "giotinh":kh.giotinh,
//                                 "sdt":kh.sdt,
//                                 "TaiKhoan":kh.TaiKhoan
                            
//                             }
//                 };

//         docClient.put(dskh,(err, data) => {
//             if (err) {
//                 console.error(`Unable to add book ${kh}, ${JSON.stringify(err, null, 2)}`);
//             }else{
//                 console.log('thanhcong');
//                 console.log(`Book created ${kh.tenkh}` );
//             }
//         });

//     });




