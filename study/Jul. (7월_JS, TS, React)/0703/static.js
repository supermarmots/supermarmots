// 9단계: 정적 속성/메서드 (static)
var Counter = /** @class */ (function () {
    function Counter() {
    }
    Counter.increment = function () {
        Counter.count++;
    };
    Counter.getCount = function () {
        console.log(Counter.count);
    };
    Counter.count = 0;
    return Counter;
}());
// 객체화를 안합니다!
// let counter = new Counter();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.getCount();
