// 🧪 unknown 타입 실습 과제
// 1. unknown 타입의 매개변수를 받아, 숫자일 경우 제곱을 출력하고 문자열이면 길이를 출력하는 함수를 작성해보세요.
function handleUnknownValue(value: unknown): void {
  if (typeof value === "number") {
    console.log(`숫자의 제곱: ${value * value}`);
  } else if (typeof value === "string") {
    console.log(`문자열의 길이: ${value.length}`);
  } else {
    console.log("숫자 또는 문자열이 아닙니다.");
  }
}
handleUnknownValue(5);
handleUnknownValue("hello");
handleUnknownValue(true);
// 2. 외부 API로부터 unknown 타입의 값을 받아, 객체인지 확인한 뒤 속성 값을 출력하는 예제를 작성하세요.
function printApiResponse(response: unknown): void {
  if (typeof response === "object" && response !== null) {
    if ("message" in response) {
      console.log("응답 메시지:", (response as any).message);
    } else {
      console.log("message 속성이 없습니다.");
    }
  } else {
    console.log("객체가 아닙니다.");
  }
}

const mockApi1 = { message: "성공", status: 200 };
const mockApi2 = "실패";

printApiResponse(mockApi1);
printApiResponse(mockApi2);
// 3. 사용자 정의 타입 가드 (isProduct)를 만들어 unknown 값이 특정 인터페이스를 만족하는지 검사해보세요.
interface Product {
  id: number;
  name: string;
  price: number;
}

function isProduct(value: unknown): value is Product {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value &&
    "price" in value &&
    typeof (value as any).id === "number" &&
    typeof (value as any).name === "string" &&
    typeof (value as any).price === "number"
  );
}

function printProductInfo(data: unknown): void {
  if (isProduct(data)) {
    console.log(`제품명: ${data.name}, 가격: ${data.price}원`);
  } else {
    console.log("유효한 Product 타입이 아닙니다.");
  }
}

const validProduct = { id: 1, name: "노트북", price: 1200000 };
const invalidProduct = { id: "x", name: "에러상품" };

printProductInfo(validProduct);
printProductInfo(invalidProduct);
