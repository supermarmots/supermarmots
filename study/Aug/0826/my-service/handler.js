"use strict";

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand,
  DeleteCommand,
} = require("@aws-sdk/lib-dynamodb");

const { v4: uuidv4 } = require("uuid");

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);
const USERS_TABLE = process.env.USERS_TABLE;

exports.getUser = async (event) => {
  try {
    console.log("USERS_TABLE", USERS_TABLE);
    console.log("event", event);
    console.log("event", event.pathParameters);
    console.log("event", event.pathParameters.id);

    const id = event.pathParameters.id;
    console.log("getUser", id);

    const result = await ddb.send(
      new GetCommand({
        TableName: USERS_TABLE,
        Key: { id },
      })
    );

    if (!result.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          error: `User ${id} not found`,
        }),
      };
    }

    // const queryParams = event.queryStringParameters;
    // const userType = queryParams.userType;

    return {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
  } catch (error) {
    console.error("Error getting user:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal server error",
      }),
    };
  }
};

exports.createUser = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const id = uuidv4();
    const user = { id, ...body };

    await ddb.send(
      new PutCommand({
        TableName: USERS_TABLE,
        Item: user,
      })
    );

    return {
      statusCode: 201,
      body: JSON.stringify(
        {
          message: `User created successfully`,
          user,
        },
        null,
        2
      ),
    };
  } catch (error) {
    console.error("Error creating user:", error);
    if (error instanceof SyntaxError) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Invalid JSON body",
        }),
      };
    }
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal server error",
      }),
    };
  }
};

exports.updateUser = async (event) => {
  try {
    const id = event.pathParameters.id;
    const body = JSON.parse(event.body || "{}");

    const result = await ddb.send(
      new UpdateCommand({
        TableName: USERS_TABLE,
        Key: { id },
        UpdateExpression: "set #name = :name, #email = :email",
        ExpressionAttributeNames: {
          "#name": "name",
          "#email": "email",
        },
        ExpressionAttributeValues: {
          ":name": body.name,
          ":email": body.email,
        },
        ReturnValues: "ALL_NEW",
      })
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `User updated`,
        user: result.Attributes,
      }),
    };
  } catch (error) {
    console.error("Error updating user:", error);
    if (error instanceof SyntaxError) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Invalid JSON body",
        }),
      };
    }
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal server error",
      }),
    };
  }
};

exports.deleteUser = async (event) => {
  try {
    const id = event.pathParameters.id;

    // Check if user exists before deleting
    const existingUser = await ddb.send(
      new GetCommand({
        TableName: USERS_TABLE,
        Key: { id },
      })
    );

    if (!existingUser.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          error: `User ${id} not found`,
        }),
      };
    }

    await ddb.send(
      new DeleteCommand({
        TableName: USERS_TABLE,
        Key: { id },
      })
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `User ${id} deleted`,
      }),
    };
  } catch (error) {
    console.error("Error deleting user:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal server error",
      }),
    };
  }
};
