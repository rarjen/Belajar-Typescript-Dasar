describe("any", () => {
  //array
  it("should support any", () => {
    const person: any = {
      id: 1,
      name: "Otniel",
      age: 23,
    };

    person.age = 24;
    person.address = "Indonesia";

    console.log(person);
  });
});
