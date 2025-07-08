function identity(value) {
    return value;
}
var output = identity("hello");
console.log(output);
var output2 = identity(10);
console.log(output2);
function getValue(obj, key) {
    return obj[key];
}
var user = { name: "Lee", age: 25 };
var objects = { name: "marmot", age: 20 };
var result = getValue(objects, "name");
console.log(result);
