import * as cdk from '@aws-cdk/core'
import * as dynamodb from '@aws-cdk/aws-dynamodb'
import * as lambda from '@aws-cdk/aws-lambda'
import * as apigw from "@aws-cdk/aws-apigateway"
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // //Dynamodb table definition
    // const table = new dynamodb.Table(this,"Hello", {
    //   partitionKey: { name: "name", type: dynamodb.AttributeType.STRING},
    // });

    // //lambda function
    // const dynamoLambda = new lambda.Function(this, "DynamoLambdaHandler", {
    //   runtime: lambda.Runtime.NODEJS_10_X,
    //   code: lambda.Code.asset("functions"),
    //   handler: "function.handler",
    //   environment: {
    //     HELLO_TABLE_NAME: table.tableName,
    //   },
    // });
    // table.grantReadWriteData(dynamoLambda);

    // //create the API Gateway with one method and path
    // const api = new apigw.RestApi(this, "Hello-API");

    // api.root
    // .resourceForPath("hello")
    // .addMethod("GET", new apigw.LambdaIntegration(dynamoLambda));

    // new cdk.CfnOutput(this, "HTTP API URL", {
    //   value: api.url ?? "Something went wrong with the deploy xD",
    // })

    new dynamodb.Table(this, "MyCoolTable", {
      partitionKey: {
        name: "userId",
        type: dynamodb.AttributeType.STRING
      },
      sortKey:{
        name: "noteId",
        type: dynamodb.AttributeType.STRING
      },
    }); 
  }
}
