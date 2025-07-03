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
