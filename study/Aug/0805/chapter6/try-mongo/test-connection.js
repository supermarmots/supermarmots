require("dotenv").config({ path: __dirname + "/.env" });
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_URI;
console.log("MONGO_URI:", process.env.MONGO_URI); // 환경변수 값 출력
if (!uri) {
  throw new Error(
    "MONGO_URI 환경변수가 정의되어 있지 않습니다. .env 파일을 확인하세요."
  );
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  await client.connect();
  const adminDB = client.db("test").admin();
  const listDatabases = await adminDB.listDatabases();
  console.log(listDatabases);
  return "OK";
}
run()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
