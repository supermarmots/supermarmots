const { PassThrough } = require("stream");

const DB = [];

function saveDB(user) {
  const oldDBSize = DB.length + 1;
  //DB.length 값이 oldDBSize보다 커야만 resolve()가 실행되면서 성공하는데, DB.length값이 oldDBSize보다 작다면 reject()가 실행되면서 실패하도록 Promise를 반환하는 함수를 작성했기 떄문
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if (DB.length > oldDBSize) {
      resolve(user);
    } else {
      reject(new Error("Save DB Error!"));
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve, reject) => {
    resolve(`success register ${user.name}`);
  });
}

function registerByPromise(user) {
  const result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch((error) => new Error(error))
    .finally(() => console.log("완료!"));
  console.log(result);
  return result;
}

const myUser = { email: "andy@test.com", password: "1234", name: "andy" };
// 일반 Promise 객체 실행
// const result = registerByPromise(myUser);

// result.then(console.log);

// 동시에 여러Promise 객체 호출하기
allResult = Promise.all([saveDB(myUser), sendEmail(myUser), getResult(myUser)]);
allResult.then(console.log);
