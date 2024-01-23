import { CEO, Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
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

  //Indexable Interface (number key)
  it("should support indexable interface in ts", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Otniel", "Kevin", "Abiel"];

    console.log(names);
  });

  //Indexable Interface (non number key)
  it("should support indexable interface in ts", () => {
    interface StringDictionary {
      [index: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Otniel",
      address: "Semarang",
    };

    console.log(dictionary["name"]);
    console.log(dictionary["address"]);

    expect(dictionary["name"]).toBe("Otniel");
    expect(dictionary["address"]).toBe("Semarang");
  });

  //Extending Interface (Inheritence)
  it("should support extending interface in ts", () => {
    const employee: Employee = {
      id: "1",
      name: "Kevin",
      division: "IT",
    };
    console.log(employee);

    const manager: Manager = {
      id: "1",
      name: "Leinto",
      division: "Marketing",
      numberOfEmployee: 12,
    };

    console.log(manager);

    const ceo: CEO = {
      id: "1",
      name: "Otniel",
      numberOfEmployee: 5000,
      numberOfCompanies: 5,
    };

    console.log(ceo);
  });

  //Function di Interface
  it("should support function interface in ts", () => {
    const person: Person = {
      name: "Kevin",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.log(person.sayHello("Leinto"));
  });

  //Intersection Types
  it("should support intersection types in ts", () => {
    type ID = string | number; //type-alias
    interface HasName {
      name: string;
    }

    interface HasID {
      id: ID;
    }

    interface HasGender {
      gender: string;
    }

    // Type Intersection (memilki turunan lebih dari 1 interface)
    type Domain = HasName & HasID & HasGender;

    const person1: Domain = {
      id: "1",
      name: "Kevin",
      gender: "L",
    };
    console.log(person1);

    const person2: Domain = {
      id: 2,
      name: "Leinto",
      gender: "L",
    };
    console.log(person2);
  });

  it("should support type assertions in ts", () => {
    const person: any = {
      name: "Kevin",
      age: 23,
    };

    const person2: Person = person as Person;

    console.log(person2);
  });
});
