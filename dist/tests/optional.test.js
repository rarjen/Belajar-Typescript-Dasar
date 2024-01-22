"use strict";
// Digunakan untuk kasus sederhana, bila dipake di banyak kode maka pake type alias
describe("Optinal Parameter", () => {
    // Undefined
    it("should support in null and undefined", () => {
        function sayHello(name) {
            if (name) {
                console.log(`Hello ${name}`);
            }
            else {
                console.log("Hello");
            }
        }
        sayHello("Kevin"); //Hello Kevin
        //Type alias
        const name = undefined;
        sayHello(name); //Hello
    });
    //Null
    it("should support in null and undefined", () => {
        function sayHello(name) {
            if (name) {
                console.log(`Hello ${name}`);
            }
            else {
                console.log("Hello");
            }
        }
        sayHello("Kevin"); //Hello Kevin
        //Type alias
        const name = undefined;
        sayHello(name); //Hello
        sayHello(null); //Hello
    });
});
