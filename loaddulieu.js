
// const dynamoose = require('dynamoose');
// const aws = require('aws-sdk');

// const dynamoDB = new aws.DynamoDB();
// dynamoose.setDDB(dynamoDB);
// dynamoose.AWS.config.update({
//     region: 'local'
// });

// dynamoose.local('http://localhost:8000');

// // dynamoose.setDefaults({create: false});





// const khschema=new dynamoose.Schema({
//         makh:{
//             type:String,
//             hashKey:true,
//         },
//         tenkh:{
//             type:String,

//         },
//         cmnd:{
//             type:String,
//         }   ,      
//         email:{
//             type:String,
//             rangeKey:true,
//             required:true
//         }  ,
//         diachi:String,
//         sdt:{
//             type:String
//         },
//         gioitinh:String,
//         TaiKhoan:{
//             username:String,
//             password:String
//         }  
                                                            
// },{ throughput: { read: 10, write: 10 } }
// );
// var Table = dynamoose.Table;
// const khachhang=dynamoose.model('KhachHang',khschema);
// khachhang.batchPut([
//     {
//         makh:123,
//         tenkh:"minh",
//         cmnd:"1234567",
//         email:"minhle@gmail.com",
//         diachi:"vĩnh phúc",
//         gioitinh:"nam",
//         sdt:"160354398",
//         TaiKhoan:
//         {
//             username:"leminh",
//             password:"12345678"
//         }
        

//     },
//     {
//         makh:234,
//         tenkh:"anh",
//         cmnd:"1387632",
//         email:"anhvan@gmail.com",
//         diachi:"Long An",
//         gioitinh:"nam",
//         sdt:"0987657822"
//     }

// ], function (err, khs) {
//     if (err) {
//       return console.log(err);
//     }
  
//     console.log('ok!' + khs);
//   });




// // // // KhachHang.query('makh').eq('123').exec(function (err, kha) {
// // // //     // Look at all the beagles
// // // //     if(err){
// // // //         console.log(`xuat gia tri. - ${err.message}`);
// // // //       }
// // // //     console.log(`xuat gia tri A: . - ${kha.makh}`);
// // // //  }   ); 
// // // //   });
// // // //   console.log(`xuat gia tri. - ${vt.makh}`);

// // // // console.log(typeof(null)); // object
// // // // console.log(typeof(undefined)); // undefined
   
// // khachhang.query("makh").eq("123").exec(function(err,obj){
// //     if(obj==null){
// //         console.log(console.error(err));
        
// //         //console.log(`loi Trước. - ${err.message}`);
  
// //     }else{
// //         // if(typeof(data.makh==undefined)){
// //         //     console.log(`loi sau. -  $()zzzzz`);
// //         // }else{
// //             //console.log(`xuat gia tri . - ${obj.email.data}` );
// //      //   }
       
// //     }
// // });


// // // module.exports=khachhang;





