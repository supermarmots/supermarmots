function add(a, b) {
    return a + b;
}
function runMore(distance) {
    return distance + 10;
}
console.log(runMore(10));
// 리턴타입 선언 안함
function eat(calories) {
    console.log("I ate " + calories + "kcal");
}
// 리턴타입 void
function sleepIn(hours) {
    console.log("I slept " + hours + " hours");
}
var ate = eat(100);
console.log(ate);
var slept = sleepIn(10);
console.log(slept);
