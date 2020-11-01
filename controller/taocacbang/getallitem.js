const express=require('express');

const aws=require('aws-sdk');
const docfile=require('fs');

aws.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
});
   
let dynamodb = new aws.DynamoDB();   
let docClient = new aws.DynamoDB.DocumentClient();


const paramsallKhachHang = {
        TableName: 'KhachHang',
    };
    