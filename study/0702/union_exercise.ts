//유니온 타입 실습 과제
// 1.type Status = "loading" | "success" | "error"를 선언하고, 상태에 따라 다른 메시지를 출력하는 reportStatus 함수를 작성하세요.

type Status = "loading" | "success" | "error";

function reportStatus(status: Status): void {
  if (status === "loading") {
    console.log("로딩 중입니다...");
  } else if (status === "success") {
    console.log("성공적으로 완료되었습니다!");
  } else if (status === "error") {
    console.log("오류가 발생했습니다.");
  }
}

// 테스트
reportStatus("loading"); // 로딩 중입니다...
reportStatus("success"); // 성공적으로 완료되었습니다!
reportStatus("error"); // 오류가 발생했습니다.

// 2.다음과 같은 유니온 객체 타입을 받아서 조건 분기로 분리 출력하세요:
//type Message =
//  | { type: "text"; content: string }
//  | { type: "image"; url: string };

//function handleMessage(msg: Message) {
// 조건 분기 처리하기
//}

type Message =
  | { type: "text"; content: string }
  | { type: "image"; url: string };

function handleMessage(msg: Message): void {
  if (msg.type === "text") {
    console.log("텍스트 메시지:", msg.content);
  } else if (msg.type === "image") {
    console.log("이미지 메시지 URL:", msg.url);
  }
}

// 테스트
handleMessage({ type: "text", content: "안녕하세요!" });
handleMessage({ type: "image", url: "https://example.com/image.jpg" });

// 3. string | number | null 타입을 받아 null이 아닐 때만 길이 또는 값을 출력하는 함수를 작성해 보세요.
function printValue(value: string | number | null): void {
  if (value === null) {
    console.log("값이 null입니다.");
    return;
  }

  if (typeof value === "string") {
    console.log(`문자열 길이: ${value.length}`);
  } else if (typeof value === "number") {
    console.log(`숫자 값: ${value}`);
  }
}

// 테스트
printValue("hello"); // 문자열 길이: 5
printValue(123); // 숫자 값: 123
printValue(null); // 값이 null입니다.
