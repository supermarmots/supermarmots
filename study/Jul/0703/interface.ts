// 7단계: 인터페이스
// 문제: Movable 이라는 인터페이스를 만들고 move(): void 메서드를 포함하세요. Car, Robot 클래스에 인터페이스를 구현하고 각각 다르게 move()를 정의하세요.

interface Moveable {
  move(): void;
}

class Car implements Moveable {
  move(): void {
    console.log("car");
  }
}

class Robot implements Moveable {
  move(): void {
    console.log("robot");
  }
}
