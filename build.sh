#! /bin/bash

if ! command -v aws &> /dev/null
then
    echo "aws could not be found, running the install"
    curl https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip -o awscliv2.zip --output -
    sudo apt-get unzip
    unzip awscliv2.zip
    sudo ./aws/install
    exit
fi

if test -f "DynamoDBLocal.jar"
then
	echo 'the local dynamoDB is already intalled.'
else
	echo "local dynamodb doesn't seem to be installed, running the install..."
	curl -o ./dynamodb_local_latest.zip "https://s3.us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_latest.zip" --output curlOutput.txt
    sudo apt-get unzip
	unzip dynamodb_local_latest.zip	
fi

echo 'running the aws configure tool. When running locally, enter "fakekey" as both credentials and "us-east-1" for region. Refer to the readme for more info'

aws configure

echo "starting up the local instance of DynamoDB..."
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb


