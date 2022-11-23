# CISC 3140 Lab 3
The first step to using the app is to run the build.sh file in the terminal. This will install a local instance of DynamoDB that is confined to the project directory if you don't already have one. 

The setup process for dynamodb also needs the aws cli. The script will also download this for you if you don't have it.

The script runs npm install as well.

The following are the steps to run the app: 

1. Run the ``` build.sh ``` file. </br> 
- This will launch a download for DynamoDB local (if it isn't already present). </br>
- This will also launch ```aws configure```,  which is used to set up preferences and credentials.</br>
The credentials can be anything you want when dealing with the local instance of DynamoDB. </br>
- **The most important setting here is the region. This MUST be set to "local"**
- The script's final step runs the command ``` java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar ``` to start the database. The database will listen for requests and responses. </br>
_Note:_ Running the script again will just launch the database server. It will not download again, unless the database files are deleted. Re-running also allows you to change the aws configure settings.

2. Run the command ``` node populate.js ``` in the terminal (inside of the project directory) in _another_ terminal window. </br>
- This will create a table named "BCSquirrels" and populate that table with sample squirrel data. 

3. The final step is to run the command ``` node app.js ```. </br>
- This will launch the server for the API and will be ready to service requests. 

The API is now ready to use.

## Enpoints 

### GET
```/squirrels``` - this gets all the squirrels in the database using scan. 

```/squirrels/id``` - replacing id with the id of a squirrel returns that specific squirrel. </br>
Ex: ```http://localhost:3000/squirrels/0013  ``` - this returns the squirrel with ```squirrel_id="0013"```

## POST
```/squirrels``` - this serves as the endpoint to put a new squirrel entry. </br>
_Note_: The request body has a specific syntax that must be followed:

``` json
{
    "Item": {
        "squirrel_id": "0200",
        "color": "black"
    },
    "TableName": "BCSquirrels"
}
```
```squirrel_id``` is the only required attribute and is a string. Other attributes may be added as needed.

### UPDATE
```/squirrels``` - this is the endpoint to update a squirrel. </br>
_Note:_ The request body must follow this syntax:

```json
{
    "Key": {
        "squirrel_id": "0200"
    },
    "TableName": "BCSquirrels",
    "AttributeUpdates": {
        "age":{
            "Action": "PUT",
            "Value": "Juvenile"
        }
    }
}
```

### Delete
```/squirrels``` - this is the endpoint to delete a squirrel. </br>
_Note:_ The request body must follow this syntax:

```json
{
    "TableName": "BCSquirrels",
    "Key": {
        "squirrel_id": "0200"
    }
}
```
