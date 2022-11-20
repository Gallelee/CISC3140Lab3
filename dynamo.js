//this file contains some functions we can use in our express app for dealing with dynamodb
const AWS = require("aws-sdk")
AWS.config.update(
{
    region: "local",
    endpoint: new AWS.Endpoint("http://[::1]:8000")
}
)
//the endpoint: An Endpoint object representing the endpoint URL for service requests.
const dynamoService = new AWS.DynamoDB()
const dynamoClient = new AWS.DynamoDB.DocumentClient()

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
    dynamoService.createTable(params, (err,data) =>{
    if(err) console.log(err)
    else console.log("created table")
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

dynamoService.listTables()


