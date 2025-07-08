// 5단계 캡슐화
class Animal {
  bark: string = ""; // 기본값 설정

  sound() {
    console.log(this.bark);
  }
}

class Dog extends Animal {
  bark = "멍멍!";
}

class Cat extends Animal {
  bark = "야옹!";
}

let dog = new Dog();
let cat = new Cat();

dog.sound(); // 멍멍!
cat.sound(); // 야옹!

// class Animal {
//   bark: string = "";

//   sound(bark: string) {
//     console.log(bark);
//   }
// }

// let animal = new Animal();
// animal.sound("멍멍!");
// animal.sound("야옹!");
