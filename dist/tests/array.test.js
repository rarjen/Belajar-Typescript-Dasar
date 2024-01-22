"use strict";
describe("array", () => {
    //array
    it("should same with js", () => {
        const names = ["Otniel", "Kevin", "Abiel"];
        const values = [1, 2, 3];
        console.log(names);
        console.log(values);
    });
    //array readonly
    it("should support readonly array", () => {
        const hobbies = ["Membaca", "Menulis"];
        console.log(hobbies);
        // hobbies[0] = "Menangis"; //Error
    });
    //tuple
    it("should support tuple", () => {
        const person = ["Otniel", "Kevin", 23];
        console.log(person[0]);
        console.log(person[1]);
        console.log(person[2]);
        // Hanya bisa read (readonly)
    });
});
