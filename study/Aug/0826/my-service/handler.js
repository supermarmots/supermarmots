exports.getUser = async (event) => {
  const userId = event.pathParameters.id;

  const queryParams = event.queryStringParameters;
  const userType = queryParams.userType;
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `User ID: ${userId}, Type: ${userType}`,
    }, null, 2),
  };
};
