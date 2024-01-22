describe("Type Alias", () => {
    it("should support in ts", () => {
        const category = {
            id: "1",
            name: "Handphone",
            description: "Mantap",
        };
        const product = {
            id: "1",
            name: "Samsung S20",
            price: 20000000,
            category: category,
        };
        console.log(category);
        console.log(product);
    });
});
export {};
