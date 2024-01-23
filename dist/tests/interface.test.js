// Digunakan untuk kasus sederhana, bila dipake di banyak kode maka pake type alias
describe("Interface", () => {
    //Interface
    it("should support in ts", () => {
        const seller = {
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
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
        console.log(add(1, 2)); //3
    });
    //Indexable Interface (number key)
    it("should support indexable interface in ts", () => {
        const names = ["Otniel", "Kevin", "Abiel"];
        console.log(names);
    });
    //Indexable Interface (non number key)
    it("should support indexable interface in ts", () => {
        const dictionary = {
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
        const employee = {
            id: "1",
            name: "Kevin",
            division: "IT",
        };
        console.log(employee);
        const manager = {
            id: "1",
            name: "Leinto",
            division: "Marketing",
            numberOfEmployee: 12,
        };
        console.log(manager);
        const ceo = {
            id: "1",
            name: "Otniel",
            numberOfEmployee: 5000,
            numberOfCompanies: 5,
        };
        console.log(ceo);
    });
    //Function di Interface
    it("should support function interface in ts", () => {
        const person = {
            name: "Kevin",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.log(person.sayHello("Leinto"));
    });
    //Intersection Types
    it("should support intersection types in ts", () => {
        const person1 = {
            id: "1",
            name: "Kevin",
            gender: "L",
        };
        console.log(person1);
        const person2 = {
            id: 2,
            name: "Leinto",
            gender: "L",
        };
        console.log(person2);
    });
    it("should support type assertions in ts", () => {
        const person = {
            name: "Kevin",
            age: 23,
        };
        const person2 = person;
        console.log(person2);
    });
});
export {};
