// async function myName() {
//   return "Andy";
// }
// async function showName() {
//   const name = await myName();
//   console.log(name);
// }
// console.log(showName());

// async await, setTimeout() 사용해서 1부터 10까지 1초에 하나씩 출력하는 코드

function waitOneSecond(msg) {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(`${msg}`), 1000);
  });
}

async function countOneToTen() {
  for (let x of [...Array(10).keys()]) {
    let result = await waitOneSecond(`${x + 1}초 대기 중...`);
    console.log(result);
  }
  console.log("완료");
}

countOneToTen();
