class Car {
  drive(driver: Driver) {
    console.log(`${driver.name}운전을 시작합니다.`);
  }
}

class Driver {
  name: string;
}

let car = new Car();
let driver = new Driver();
driver.name = "마멋";
car.drive(driver);
