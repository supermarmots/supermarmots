var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person2 = /** @class */ (function () {
    // name: string;
    // age: number;
    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    // }
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    Person2.prototype.introduce = function () {
        return "Hi, I'm ".concat(this.name);
    };
    return Person2;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Go");
    };
    Car.prototype.alarm = function () {
        console.log("Beep Beep");
    };
    Car.prototype.back = function () {
        console.log("Back");
    };
    Car.prototype.wipe = function () {
        console.log("Wipe");
    };
    Car.prototype.break = function () {
        console.log("Break");
    };
    Car.prototype.accelerate = function () {
        console.log("Accelerate");
    };
    Car.prototype.trunck = function () {
        console.log("Trunck");
    };
    return Car;
}());
var DumpTruck = /** @class */ (function (_super) {
    __extends(DumpTruck, _super);
    function DumpTruck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DumpTruck.prototype.operate = function () {
        console.log("Operate");
    };
    DumpTruck.prototype.spread = function () {
        console.log("Spread");
    };
    return DumpTruck;
}(Car));
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus(passenger, busNumber) {
        var _this = _super.call(this) || this;
        console.log("Bus constructor");
        return _this;
    }
    Bus.prototype.openDoor = function () {
        console.log("Open Door");
    };
    Bus.prototype.trunck = function () {
        console.log("");
    };
    return Bus;
}(Car));
