const express=require('express');

const aws=require('aws-sdk');
const docfile=require('fs');
const datakh=require('../../data/khachhang')
aws.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
});
   
let dynamodb = new aws.DynamoDB();   
let docClient = new aws.DynamoDB.DocumentClient();

let paramskhachhang = {
    TableName: "KhachHang",
    KeySchema: [
        {AttributeName: "makh", KeyType: "HASH"},
        {AttributeName: "email", KeyType: "RANGE"}
    ],
    AttributeDefinitions: [
            {AttributeName: "makh", AttributeType: "S"},
            {AttributeName: "email", AttributeType: "S"}
    ],
        ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
        }
    };
    
    
   
 
let paramchuyenbay = {
        TableName: "ChuyenBay",
        KeySchema: [
            {AttributeName: "macb", KeyType: "HASH"},
            {AttributeName: "mave", KeyType: "RANGE"}
        ],
        AttributeDefinitions: [
                {AttributeName: "macb", AttributeType: "S"},
                {AttributeName: "mave", AttributeType: "S"}
        ],
            ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10
            }
        };
        let paramhoadonvave = {
            TableName: "HoaDon",
            KeySchema: [
                {AttributeName: "mahd", KeyType: "HASH"},
                {AttributeName: "mave", KeyType: "RANGE"}
            ],
            AttributeDefinitions: [
                    {AttributeName: "mahd", AttributeType: "S"},
                    {AttributeName: "mave", AttributeType: "S"}
            ],
                ProvisionedThroughput: {
                ReadCapacityUnits: 10,
                WriteCapacityUnits: 10
                }
            };
            let paramsmaybayvatuyenbay = {
                TableName: "maybay",
                KeySchema: [
                    {AttributeName: "mamb", KeyType: "HASH"},
                    {AttributeName: "matuyen", KeyType: "RANGE"}
                ],
                AttributeDefinitions: [
                        {AttributeName: "mamb", AttributeType: "S"},
                        {AttributeName: "matuyen", AttributeType: "S"}
                ],
                    ProvisionedThroughput: {
                    ReadCapacityUnits: 10,
                    WriteCapacityUnits: 10
                    }
                };
                let paramsquanli = {
                    TableName: "Quanli",
                    KeySchema: [
                        {AttributeName: "maql", KeyType: "HASH"},
                        {AttributeName: "email", KeyType: "RANGE"}
                    ],
                    AttributeDefinitions: [
                            {AttributeName: "maql", AttributeType: "S"},
                            {AttributeName: "email", AttributeType: "S"}
                    ],
                        ProvisionedThroughput: {
                        ReadCapacityUnits: 10,
                        WriteCapacityUnits: 10
                        }
                    };
 
module.exports.taobangbk =dynamodb.createTable(paramskhachhang, (err, data) => {
    if(err){
        console.error(`Something went wrong ${JSON.stringify(err,null,2)}`);
    }else{
    console.log(`Created table ${JSON.stringify(data, null, 2)}`);
    }
});

// module.exports.tquanli=dynamodb.createTable(paramsquanli, (err, data) => {
//     if(err){
//         console.error(`Something went wrong ${JSON.stringify(err,null,2)}`);
//     }else{
//     console.log(`Created table ${JSON.stringify(data, null, 2)}`);
//     }
// });

// module.exports.thoadon=dynamodb.createTable(paramhoadonvave, (err, data) => {
//     if(err){
//         console.error(`Something went wrong ${JSON.stringify(err,null,2)}`);
//     }else{
//     console.log(`Created table ${JSON.stringify(data, null, 2)}`);
//     }
// });

// module.exports.tchuyenbay=dynamodb.createTable(paramchuyenbay, (err, data) => {
//     if(err){
//         console.error(`Something went wrong ${JSON.stringify(err,null,2)}`);
//     }else{
//     console.log(`Created table ${JSON.stringify(data, null, 2)}`);
//     }
// });

// module.exports.tmaybay=dynamodb.createTable(paramsmaybayvatuyenbay, (err, data) => {
//     if(err){
//         console.error(`Something went wrong ${JSON.stringify(err,null,2)}`);
//     }else{
//     console.log(`Created table ${JSON.stringify(data, null, 2)}`);
//     }
// });


// module.exports.themdulieukhachhang=function(){

//     let khachhangds = JSON.parse(docfile.readFileSync('/khachhang', 'utf-8'));


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
//             console.error(`Unable to add book ${book.title}, ${JSON.stringify(err, null, 2)}`);
//             }else{
//                 console.log('thanhcong');
//                 console.log(`Book created ${book.name}` + err.message);
//             }
//         });


// })};