var express=require('express');
const aws = require('aws-sdk');
// var dynamoose = require('dynamoose');
// // var dskh=require('../../loaddulieu');
const xlchung=require('../../Routs/cachamxulichung');

// const listkh=dskh.batchGet()
// const tk=function(listkh){
//         listkh:listkh
        
// };
aws.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
    });
 let docClient = new aws.DynamoDB.DocumentClient();


module.exports.getAllItems= function getAllItems(res) {
        let params = {
            TableName: "KhachHang"
        };
    let scanObject = {};
    docClient.scan(params, (err, data) => {
    if (err) {
        scanObject.err = err;
    } else {
        scanObject.data = data;
    }
    
     xlchung.listTable(scanObject,res);

    });
}







