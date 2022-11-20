//this file contains some functions we can use in our express app for dealing with dynamodb
const AWS = require("aws-sdk")
AWS.config.update({
    region: "us-east-1",
    accessKeyId: "fakeKey",
    secretAccessKey: "fakeKey"
})
//the endpoint: An Endpoint object representing the endpoint URL for service requests.
const dynamoClient = new AWS.DynamoDB.DocumentClient({endpoint: "http://localhost:8000"})

const params = {
    AttributeDefinitions: [
       {
      AttributeName: "squirrel_id", 
      AttributeType: "S"
     }
    ], 
    KeySchema: [
       {
      AttributeName: "squirrel_id", 
      KeyType: "HASH"
     }
    ], 
    ProvisionedThroughput: {
     ReadCapacityUnits: 5, 
     WriteCapacityUnits: 5
    }, 
    TableName: "BCSquirrels"
   } 

function makeTable(){
    dynamoClient.createTable(params, (err,data) =>{
    if(err) console.log(err)
    else console.log(data)
})
}

function getAllSquirrels(){
    dynamoClient.scan(params.TableName, (err,data)=>{
        if(err) console.log(err)
        else console.log(data)
    }
    )
}

makeTable()


