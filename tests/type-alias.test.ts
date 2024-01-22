import { Category, Product } from "../src/type-alias";

describe("Type Alias", () => {
  it("should support in ts", () => {
    const category: Category = {
      id: "1",
      name: "Handphone",
    };

    const product: Product = {
      id: "1",
      name: "Samsung S20",
      price: 20000000,
      category: category,
    };

    console.log(category);
    console.log(product);
  });
});
