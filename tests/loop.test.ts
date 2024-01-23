describe("Loop", () => {
  //For Loop
  it("should support For Loop in ts", () => {
    const names: string[] = ["Otniel", "Kevin", "Abiel"];

    // For loop
    for (let i = 0; i < names.length; i++) {
      const element = names[i];
      console.log(element);
    }

    // For of
    for (const name of names) {
      console.log(name);
    }

    // For in
    for (const index in names) {
      console.log(names[index]);
    }
  });

  //While Loop
  it("should support While Loop in ts", () => {
    let counter: number = 0;

    while (counter < 10) {
      console.log(counter);
      counter++;
    }
  });

  // Do While Loop
  it("should support Do While Loop in ts", () => {
    let counter = 0;

    do {
      console.log(counter);
      counter++;
    } while (counter < 10);
  });

  // Break and Continue
  it("should support Break & Continue Loop in ts", () => {
    let counter = 0;

    do {
      counter++;
      if (counter == 10) {
        break;
      }

      if (counter % 2 == 0) {
        continue;
      }

      console.log(counter);
    } while (true);
  });
});
