const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://yun:chanwo0205@cluster0.b3pcsc6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

module.exports = function (callback) {
  return MongoClient.connect(uri, callback);
};
