// 8단계: 메서드 오버로딩
// 문제: Calculator 클래스를 만들고 add() 메서드를 오버로딩 하여 숫자 2개를 더할 수 있도록 하고, 문자열 2개도 연결할 수 있도록 구현하세요.

// class Calculator {
//   constructor(a: number, b: number) {}
//   add(a: number, b: number): void {
//     console.log(a + b);
//   }

//   add(a: string, b: string): void {
//     console.log(a + b);
//   }
// }

// let calculator = new Calculator();
// calculator.add(1, 2);
// calculator.add("마", "멋");

class Calculator {
  // 함수 오버로드 시그니처
  add(a: number, b: number): void;
  add(a: string, b: string): void;

  // 실제 구현 (시그니처와 일치하는 방식으로)
  add(a: number | string, b: number | string): void {
    console.log(a + "" + b); // 문자열 결합 or 숫자 덧셈 (자바스크립트 특성)
  }
}

let calculator = new Calculator();
calculator.add(1, 2); // 3
calculator.add("마", "멋"); // 마멋
