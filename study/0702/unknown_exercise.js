// 🧪 unknown 타입 실습 과제
// 1. unknown 타입의 매개변수를 받아, 숫자일 경우 제곱을 출력하고 문자열이면 길이를 출력하는 함수를 작성해보세요.
function handleUnknownValue(value) {
    if (typeof value === "number") {
        console.log("\uC22B\uC790\uC758 \uC81C\uACF1: ".concat(value * value));
    }
    else if (typeof value === "string") {
        console.log("\uBB38\uC790\uC5F4\uC758 \uAE38\uC774: ".concat(value.length));
    }
    else {
        console.log("숫자 또는 문자열이 아닙니다.");
    }
}
handleUnknownValue(5);
handleUnknownValue("hello");
handleUnknownValue(true);
// 2. 외부 API로부터 unknown 타입의 값을 받아, 객체인지 확인한 뒤 속성 값을 출력하는 예제를 작성하세요.
function printApiResponse(response) {
    if (typeof response === "object" && response !== null) {
        if ("message" in response) {
            console.log("응답 메시지:", response.message);
        }
        else {
            console.log("message 속성이 없습니다.");
        }
    }
    else {
        console.log("객체가 아닙니다.");
    }
}
var mockApi1 = { message: "성공", status: 200 };
var mockApi2 = "실패";
printApiResponse(mockApi1);
printApiResponse(mockApi2);
function isProduct(value) {
    return (typeof value === "object" &&
        value !== null &&
        "id" in value &&
        "name" in value &&
        "price" in value &&
        typeof value.id === "number" &&
        typeof value.name === "string" &&
        typeof value.price === "number");
}
function printProductInfo(data) {
    if (isProduct(data)) {
        console.log("\uC81C\uD488\uBA85: ".concat(data.name, ", \uAC00\uACA9: ").concat(data.price, "\uC6D0"));
    }
    else {
        console.log("유효한 Product 타입이 아닙니다.");
    }
}
var validProduct = { id: 1, name: "노트북", price: 1200000 };
var invalidProduct = { id: "x", name: "에러상품" };
printProductInfo(validProduct);
printProductInfo(invalidProduct);
