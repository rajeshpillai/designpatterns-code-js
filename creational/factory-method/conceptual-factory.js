class Product {
  constructor() {
    this.type = "Product";
    if (this.constructor === Product) {
      // Error Type 1. Abstract class can not be constructed.
      throw new TypeError("Cannot construct abstract class.");
    }
  }

  getMake() {
    throw new TypeError("Do not call abstract method getMake from child.");
  }
}

class Product1 extends Product {
  constructor() {
    super();
    this.type = "Product1";
  }

  getMake() {
    return this.type;
  }
}

class Product2 extends Product {
  constructor() {
    super();
    this.type = "Product2";
  }

  getMake() {
    return this.type;
  }
}


class ProductFactory {
  static getProduct(type) {
    if (type === "product1") {
      return new Product1();
    } else if (type === "product2") {
      return new Product2();
    }
    throw new Error("Product type undefined!");
  }
}

let product1 = ProductFactory.getProduct("product1");
console.log(product1.getMake());

let product2 = ProductFactory.getProduct("product2");
console.log(product2.getMake());
