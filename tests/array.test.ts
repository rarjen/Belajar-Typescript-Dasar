describe("array", () => {
  //array
  it("should same with js", () => {
    const names: string[] = ["Otniel", "Kevin", "Abiel"];
    const values: number[] = [1, 2, 3];

    console.log(names);
    console.log(values);
  });

  //array readonly
  it("should support readonly array", () => {
    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];

    console.log(hobbies);

    // hobbies[0] = "Menangis"; //Error
  });

  //tuple
  it("should support tuple", () => {
    const person: readonly [String, String, Number] = ["Otniel", "Kevin", 23];

    console.log(person[0]);
    console.log(person[1]);
    console.log(person[2]);
    // Hanya bisa read (readonly)
  });
});
