const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config({ path: __dirname + "/.env" });
const url = process.env.MONGO_URI;

const client = new MongoClient(url, { useNewUrlParser: true });

async function main() {
  try {
    await client.connect();

    console.log("Monogo DB 접속 성공");

    const collection = client.db("test").collection("person");

    await collection.insertOne({ name: "Andy", age: 30 });
    console.log("문서 추가 완료");

    const documents = await collection.find({ name: "Andy" }).toArray();
    console.log("찾은 문서:", documents);

    await collection.updateOne({ name: "Andy" }, { $set: { age: 31 } });
    console.log("문서 업데이트");

    const updatedDocuments = await collection.find({ name: "Andy" }).toArray();
    console.log("갱신된 문서 :", updatedDocuments);

    //문서 삭제하기
    // await collection.deleteOne({ name: 'Andy' });
    // console.log('문서 삭제');

    await client.close();
  } catch (err) {
    console.error(err);
  }
}

main();
