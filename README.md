# CISC3140Lab3
The first step to using the app is t0 run the build.sh file in the terminal. This will install a local instance of DynamoDB that is confined to the project directory if you don't already have one. 
The setup process for dynamodb also needs the aws cli. The script will also download this for you if you don't have it.
The script also runs npm install as well.

The following are the steps to take to run the app: 
1) run the build.sh file
    -This will launch a download for DynamoDB local (if it is not present).
    -This will also launch aws configure wich is used to settup preferences and credentials
        -The credentials can be anything you want when dealing with the local instance of DynamoDB
        -!!!!! The most important setting here is the region. That must be set to "local" !!!!!
    -The scripts final step runs the command "java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar" to start the database. The database will listen for requests and responses.
    (note - running the script again will just launch the database server. It will not download again(unless the database files are deleted). This also gives you the chance to change the aws configure settings if you want to.)

2)Run the command "node populate.js" in the terminal (inside of the project directory) in another terminal window
    -This will create a table name "BCSquirrels" and populate that table with sample squirrel data


3)The final step is to run the command "node app.js"
    -This will lauch the server for the api and will be ready to service requests. 

The Api is now ready to use.


## Endpoints
### GET
"/squirrels" - this gets all squirrels in the database by way of scan.

"/squirrels/id" - replacing id with an id of a squirrel gets that specific squirrel.
    ex) http://localhost:3000/squirrels/0013  - this returns the squirrel with squirrel_id = "0013"

### POST
"/squirrels" - this serves as the endpoint to put a new squirrel entry.

_Note:_ The request body has a specific syntax that must be followed.

    ``` json
    {
    "Item": {
        "squirrel_id":"0200",
        "color": "black"
    },
    "TableName" : "BCSquirrels" 
    
    }
    ```

Squirrel_id is the only required attribute and is a string. Other attributes can be added as needed.

### UPDATE
"/squirrels" - this is the enpoint to update a squirrel. 

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
                "Value": "juvenile"
            }
        }
    }
    ```

### DELETE
"/squirrels" - this is the endpoint to delete a squirrel.
_Note:_ The request body must follow this syntax:

    ```json
    {
        "TableName": "BCSquirrels",
        "Key": {
            "squirrel_id": "0200"
        }
    }
    ```
 
