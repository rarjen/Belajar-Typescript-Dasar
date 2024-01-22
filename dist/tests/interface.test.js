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
        seller.name = "TOko Saya";
        // seller.nib = "12345"; //error (digunakan untuk melindungi property agar tidak bisa diubah lagi stlh diisi)
        console.log(seller);
    });
    //Function Interface
    it("should support function interface in ts", () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        console.log(add(1, 2)); //3
    });
});
export {};
