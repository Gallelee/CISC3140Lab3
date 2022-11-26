//this file contains some functions we can use in our express app for dealing with dynamodb
const { DynamoDB } = require("aws-sdk")
const AWS = require("aws-sdk")

const squirrels = require('./sampleSquirrelData.js').data

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
    TableName: "BCSquirrels",
   } 

function makeTable(){
    
   dynamoService.createTable(params, (err,data) =>{
    if(err)console.log("table already exists")
    else console.log(`created table${params.TableName}`)
    addSquirrelData()
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

async function updateSquirrel(squirrel){
    const updatedSquirrel = await dynamoClient.update(squirrel).promise()
    console.log(updatedSquirrel)
    return updatedSquirrel
}

async function deleteSquirrel(squirrel){
    const deleted = await dynamoClient.delete(squirrel).promise()
    console.log(deleted)
    return deleted
}


 function addSquirrelData(){

    //Adds first 24, test this first 
    // let part = squirrels.splice(0,24);
    // let reqParams = {
    //     RequestItems: {
    //         "BCSquirrels" : part
    //     }
    // };
    //  dynamoService.batchWriteItem(reqParams,function(err,data){
    //     if(err){
    //         console.log("Error", err);
    //     }
    //     else{
    //         console.log(data);
    //     }
    // });

    //Add all squirrels 
    
    for(let i = 0; i < 101; i+=24){
        let part = squirrels.slice(i,i+24);
        let reqParams = {
            RequestItems: {
                "BCSquirrels": part
            }
        };
        dynamoService.batchWriteItem(reqParams, function(err,data){
            if(err){
                console.log("Error", err);
            }
            else{
                console.log(data);
            }
        });
    }
    
}

exports.getAllSquirrels = getAllSquirrels
exports.getSquirrelById = getSquirrelById
exports.putSquirrel = putSquirrel
exports.makeTable = makeTable
exports.updateSquirrel = updateSquirrel
exports.deleteSquirrel = deleteSquirrel







