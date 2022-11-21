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

async function getAllSquirrels(){
     const data = await dynamoClient.scan(params).promise()
     console.log(data)
     return data
}
        

async function getSquirrelById(id){
    const squirrelParams = {
        TableName: "BCSquirrels",
        Key: {
            squirrel_id: `${id}`
        }
    }
    const squirrel = await dynamoClient.get(squirrelParams).promise()
    console.log(squirrel)
    return squirrel
}

async function putSquirrel(squirrel){
    const newSquirrel = await dynamoClient.put(squirrel).promise()
    console.log(newSquirrel)
    return newSquirrel
}

makeTable()

exports.getAllSquirrels = getAllSquirrels
exports.getSquirrelById = getSquirrelById
exports.putSquirrel = putSquirrel


