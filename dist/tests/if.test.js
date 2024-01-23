"use strict";
// Digunakan untuk kasus sederhana, bila dipake di banyak kode maka pake type alias
describe("If Statement", () => {
    //If Statement
    it("should support if statement in ts", () => {
        const examValue = 90;
        if (examValue > 80) {
            console.log("Good");
        }
        else if (examValue > 60) {
            console.log("Not Bad");
        }
        else {
            console.log("Try Again");
        }
    });
    // Ternary operation
    it("should support ternary operator in ts", () => {
        const value = 80;
        const say = value >= 75 ? "Congrats" : "Try Again";
        console.log(say);
    });
    // Switch Statement
    it("should support switch statement in ts", () => {
        function sayHello(name) {
            switch (name) {
                case "Otniel":
                    return "Hi Otniel";
                case "Kevin":
                    return "Hi Kevin";
                default:
                    return "Hello";
            }
        }
        console.log(sayHello("Kevin"));
        console.log(sayHello("Otniel"));
        console.log(sayHello("Leinto")); //Hello
    });
});
