

const dynamoose = require('dynamoose');
const aws = require('aws-sdk');
const dynamoDB = new aws.DynamoDB();
// dynamoose.setDDB(dynamoDB);


dynamoose.AWS.config.update({
    region: 'local'
  });
  dynamoose.local('http://localhost:8000');
dynamoose.setDefaults({create: false});




// Create cat model with default options
// const Cat = dynamoose.model('Cat', {
//   id: Number,
//   name: String
// });

// const schema=dynamoose.Schema;
// const s=new schema({

// });



// var x=[];
// x.push(3);
// x.push(4);
// x.forEach(function(i){
//   console.log('gia tri mang x[] là: ' +i);
// })
// Create a new cat object
// const garfield = new Cat({
//   id: 777,
//   name: 'mjdueiw'
// });


// Save to DynamoDB
//garfield.save(); // Returns a promise that resolves when save has completed

// // Lookup in DynamoDB
// Cat.get(777).then((badCat) => {
//   console.log(`Never trust a smiling cat.X - ${badCat.name}`);
// });

