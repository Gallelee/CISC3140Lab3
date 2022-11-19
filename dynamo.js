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
    TableName: "BCSquirrels",
}