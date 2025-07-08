// 스프레드 연산자
const user = { id: 1, name: "Yun", age: 20, address: "seoul" };
const updated = { ...user, name: "marmot" };

console.log(updated);

const userArr = [1, 2, 3, 4, 5];
const updatedArr = [1, 2, ...userArr, 6, 7];

console.log(updatedArr);

// 구조분해
const userSplit = { id: 1, name: "Yun", age: 20, address: "Seoul" };
// const { id, name, age, address } = userSplit;
// console.log(id, name, age, address);

const { id, name, ...rest } = userSplit;
console.log(id, name, rest);

// 1. 구조 분해 할당을 이용해 다음 객체에서 `title`과 `author`를 추출해보세요.
const bookSplit = {
  title: "수퍼마멋에이드",
  author: "히말라야마멋",
  publisher: "파라마운트",
};
const { title: title2, author } = bookSplit;
console.log(title2, author);
