// 10단계: 종합 시스템 프로젝트

class User {
  userName: string;
}

class Product {
  productName: string;
}

class Order {
  user: User;
  product: Product;

  summary() {
    console.log(
      `사용자 ${this.user.userName}(이)가 상품 ${this.product.productName}(을)를 구매했습니다.`
    );
  }
}

let user = new User();
user.userName = "마멋";
let product = new Product();
product.productName = "크래커";

let order = new Order();
order.user = user;
order.product = product;

order.summary();
