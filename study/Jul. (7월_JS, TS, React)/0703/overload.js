// 8단계: 메서드 오버로딩
// 문제: Calculator 클래스를 만들고 add() 메서드를 오버로딩 하여 숫자 2개를 더할 수 있도록 하고, 문자열 2개도 연결할 수 있도록 구현하세요.
var Calculator = /** @class */ (function () {
    function Calculator(a, b) {
    }
    Calculator.prototype.add = function (a, b) {
        console.log(a + b);
    };
    Calculator.prototype.add = function (a, b) {
        console.log(a + b);
    };
    return Calculator;
}());
var calculator = new Calculator();
calculator.add(1, 2);
calculator.add("마", "멋");
