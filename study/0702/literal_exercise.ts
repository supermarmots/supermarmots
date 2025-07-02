// 리터럴 타입 & 타입 별칭 실습 과제
// 1. type TrafficLight = "red" | "yellow" | "green"을 정의하고, 각각에 대해 다른 메시지를 출력하는 함수를 만들어보세요.
// 리터럴 타입 별칭 정의
type TrafficLight = "red" | "yellow" | "green";

// 신호등 메시지 출력 함수
function showTrafficMessage(light: TrafficLight): void {
  if (light === "red") {
    console.log("정지하세요.");
  } else if (light === "yellow") {
    console.log("주의하세요.");
  } else if (light === "green") {
    console.log("출발하세요.");
  }
}

// 테스트
showTrafficMessage("red"); // 정지하세요.
showTrafficMessage("yellow"); // 주의하세요.
showTrafficMessage("green"); // 출발하세요.

// 2. 사용자 역할을 "admin" | "editor" | "viewer"로 제한하고, 역할별 권한을 출력하는 getPermissions(role: Role) 함수를 구현하세요.
// 사용자 역할 리터럴 타입
type Role = "admin" | "editor" | "viewer";

// 역할에 따른 권한 출력 함수
function getPermissions(role: Role): void {
  if (role === "admin") {
    console.log("모든 권한이 있습니다.");
  } else if (role === "editor") {
    console.log("편집 권한이 있습니다.");
  } else if (role === "viewer") {
    console.log("읽기 전용 권한이 있습니다.");
  }
}

// 테스트
getPermissions("admin"); // 모든 권한이 있습니다.
getPermissions("editor"); // 편집 권한이 있습니다.
getPermissions("viewer"); // 읽기 전용 권한이 있습니다.

// 3. type Shape = "circle" | "square" | "triangle"과 함께 type Size = "small" | "medium" | "large"를 정의하고, 이를 함께 사용하는 객체 배열을 만들어보세요.
// 도형 및 크기 리터럴 타입 정의
type Shape = "circle" | "square" | "triangle";
type Size = "small" | "medium" | "large";

// 도형 객체 타입
type ShapeObject = {
  shape: Shape;
  size: Size;
};

// 도형 객체 배열
const shapes: ShapeObject[] = [
  { shape: "circle", size: "small" },
  { shape: "square", size: "medium" },
  { shape: "triangle", size: "large" },
  { shape: "circle", size: "large" },
];

// 출력 예시
shapes.forEach((item) => {
  console.log(`도형: ${item.shape}, 크기: ${item.size}`);
});
