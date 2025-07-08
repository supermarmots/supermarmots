// 2단계: 생성자(Constructor)사용
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`제품명: ${this.name}, 가격: ${this.price}만원`);
  }
}

let product = new Product("MacBook", 150);
product.display();
