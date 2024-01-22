describe("Data Type", () => {
  it("must declare", () => {
    let name: string = "Otniel Kevin Abiel";
    let balance: number = 10000;
    let isVip: boolean = true;

    console.log(name);
    console.log(balance);
    console.log(isVip);

    // name = 100;
    // balance = "100";
    // isVip = 100;

    // saat melakukan npx tsc akan di komplain error
    // namun saat melakukan testing (npm test) maka akan sukses karena babel mengahpus kode ts dan di convert ke js
    // sering" pake npx tsc agar ga error
  });
});
