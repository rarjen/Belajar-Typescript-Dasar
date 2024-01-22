"use strict";
// Digunakan untuk kasus sederhana, bila dipake di banyak kode maka pake type alias
describe("Object", () => {
    it("should support in ts", () => {
        const person = {
            id: "1",
            name: "Kevin",
        };
        console.log(person);
        person.name = "Leinto";
        console.log(person);
    });
    // Object Optional properties
    it("should support in ts", () => {
        const person = {
            id: "1",
            name: "Kevin",
        };
        console.log(person);
        person.name = "Leinto";
        console.log(person);
        person.hobbies = ["Makan"];
        console.log(person);
    });
});
