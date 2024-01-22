import { Seller } from "../src/seller";

// Digunakan untuk kasus sederhana, bila dipake di banyak kode maka pake type alias
describe("Interface", () => {
  //Interface
  it("should support in ts", () => {
    const seller: Seller = {
      id: 1,
      name: "Kevin",
      nib: "1234",
      npwp: "4321",
    };

    console.log(seller);

    seller.name = "Toko Saya";
    // seller.nib = "12345"; //error (digunakan untuk melindungi property agar tidak bisa diubah lagi stlh diisi)
    console.log(seller);
  });

  //Function Interface
  it("should support function interface in ts", () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);

    console.log(add(1, 2)); //3
  });
});
