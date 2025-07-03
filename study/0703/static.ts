// 9단계: 정적 속성/메서드 (static)

class Counter {
  static count: number = 0;

  static increment() {
    Counter.count++;
  }

  static getCount() {
    console.log(Counter.count);
  }
}

// 객체화를 안합니다!
// let counter = new Counter();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.getCount();
