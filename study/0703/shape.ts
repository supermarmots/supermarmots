// 5단계: 추상 클래스
// 문제: Shape 라는 추상 클래스를 만들고, getArea(): number  추상 메서드를 정의하세요. Rectangle, Circle 클래스를 상속받아 각각 면적을 계산하는 로직을 구현하세요.
// 추상 클래스 정의
abstract class Shape {
  abstract getArea(): number;
}

// 사각형 클래스
class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

// 원 클래스
class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// 테스트
const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // 50

const circle = new Circle(7);
console.log(circle.getArea()); // 153.938...
