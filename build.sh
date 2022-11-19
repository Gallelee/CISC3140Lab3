#! /bin/bash

if test -f "DynamoDBLocal.jar"
then
	echo 'the local dynamoDB is already intalled.'
else
	echo "local dynamodb doesn't seem to be installed, running the install..."
	curl https://s3.us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_latest.zip --output curlOutput.txt
	sudo apt-get unzip
	unzip dynamodb_local_latest.zip	
fi


echo "starting up the local instance of DynamoDB..."
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb


