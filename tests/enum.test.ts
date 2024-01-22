import { Customer, CustomerType } from "../src/enum";

// Digunakan untuk kasus sederhana, bila dipake di banyak kode maka pake type alias
describe("Enum", () => {
  it("should support in ts", () => {
    const customer: Customer = {
      id: 1,
      name: "Kevin",
      type: CustomerType.GOLD,
    };

    console.log(customer);
  });
});
