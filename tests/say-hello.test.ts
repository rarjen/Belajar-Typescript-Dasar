import { sayHello } from "../src/say-hello"; //jangan tambahkan extention krn nanti saat jalan akan jadi .js

describe('sayHello', (): void => { 
    it("should return Hello World", (): void => {
        expect(sayHello("World")).toBe("Hello World");
    })
 })