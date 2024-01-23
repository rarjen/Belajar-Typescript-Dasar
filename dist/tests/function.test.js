"use strict";
// Digunakan untuk kasus sederhana, bila dipake di banyak kode maka pake type alias
describe("Function", () => {
    it("should support function in ts", () => {
        // function with return value
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Kevin")).toBe("Hello Kevin");
        //function without return value
        function printHello(name) {
            //void is optional
            console.log(`Hello ${name}`);
        }
        printHello("Leinto");
    });
    // Rest paramater
    it("should support rest parameter in ts", () => {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    // Optional parameter
    it("should support optional parameter in ts", () => {
        function sayHello(firstName, lastName) {
            if (!lastName) {
                return `Hello ${firstName}`;
            }
            else {
                return `Hello ${firstName} ${lastName}`;
            }
        }
        expect(sayHello("Kevin")).toBe("Hello Kevin");
        expect(sayHello("Kevin", "Abiel")).toBe("Hello Kevin Abiel");
    });
    // Overloading function
    it("should support overloading function in ts", () => {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("kevin")).toBe("KEVIN");
    });
    // Function sebagai parameter
    it("should support function as parameter in ts", () => {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        function toUpper(name) {
            return name.toUpperCase();
        }
        expect(sayHello("kevin", toUpper)).toBe("Hello KEVIN");
    });
    // Anonymous Function
    it("should support anonymous function in ts", () => {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        expect(sayHello("kevin", function (name) {
            return name.toUpperCase();
        })).toBe("Hello KEVIN");
    });
    // Arrow Function
    it("should support arrow function in ts", () => {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        expect(sayHello("kevin", (name) => {
            return name.toUpperCase();
        })).toBe("Hello KEVIN");
    });
});
