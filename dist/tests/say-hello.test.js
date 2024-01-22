import { sayHello } from "../src/say-hello"; //jangan tambahkan extention krn nanti saat jalan akan jadi .js
describe('sayHello', () => {
    it("should return Hello World", () => {
        expect(sayHello("World")).toBe("Hello World");
    });
});
