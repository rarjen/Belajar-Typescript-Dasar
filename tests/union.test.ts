describe("Union Type", () => {
  it("should support union type in ts", () => {
    let sample: number | string | boolean = "Otniel";

    console.log(sample);

    sample = 100;
    console.log(sample);

    sample = true;
    console.log(sample);

    // sample = []; //error
  });

  it("should support typeof operator", () => {
    const process = (value: Number | String | Boolean) => {
      // melakukan handle pada masing-masing tipe data
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        !value;
      }

      expect(process("kevin")).toBe("KEVIN");
      expect(process(100)).toBe(102);
      expect(process(true)).toBe(false);
    };
  });
});
