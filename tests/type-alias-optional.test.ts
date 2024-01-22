import {
  CategoryOptional,
  ProductOptional,
} from "../src/type-alias-optional-properties";

describe("Type Alias", () => {
  it("should support in ts", () => {
    const category: CategoryOptional = {
      id: "1",
      name: "Handphone",
      description: "Mantap",
    };

    const product: ProductOptional = {
      id: "1",
      name: "Samsung S20",
      price: 20000000,
      category: category,
    };

    console.log(category);
    console.log(product);
  });
});
