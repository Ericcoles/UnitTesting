"use strict";

const ComputerStorage = require("../computerStorage.js");
const computers = require("../computerData.json");

describe("Testing constructor", (data) => {
  test("Test that the missing parameter throws an exception", () => {
    expect(() => new ComputerStorage()).toThrow("data storage missing");
  });
});

// **get_All_computers_By_processor(searchValue)**
describe("Test Cases for get_All_computers_By_processor(searchValue)", () => {
  const computerStorage = new ComputerStorage(computers);

  test("Test 1: If a parameter searchValue is the processor of the computer to be searched Returns an array of computer objects of given processor.", () => {
    const expectedValue = [
      {
        number: 5,
        name: "MaxEffect 2000",
        processor: "PiTron 3",
        price: 25,
        memory: 32,
        accessories: ["Cooling system", "super power supply", "Super fan"],
      },
      {
        number: 6,
        name: "MaxEffect 3000",
        processor: "PiTron 3",
        price: 26,
        memory: 33,
        accessories: [],
      },
      {
        number: 7,
        name: "MaxEffect 4000",
        processor: "PiTron 3",
        price: 28,
        memory: 34,
      },
    ];

    expect(computerStorage.get_All_Computers_By_Processors("PiTron 3")).toEqual(
      expectedValue
    );
  });

  test("Test 2: If a parameter searchValue is found but is not matching with the object return empty array", () => {
    expect(computerStorage.get_All_Computers_By_Processors("fake")).toEqual([]);
  });

  test("Test 3: missing parameter throws an exception: 'missing parameter'", () => {
    expect(() => computerStorage.get_All_Computers_By_Processors()).toThrow(
      "missing parameter"
    );
  });
});

// ### **get_memory_of_computer_by_name(searchKey)**

describe("Test Cases for get_memory_of_computer_by_name(searchKey)", () => {
  const computerStorage = new ComputerStorage(computers);

  test("Test 1: If a parameter searchValue is the processor of the computer to be searched Returns an array of computer objects of given processor.", () => {
    const expectedValue = [
      {
        number: 1,
        name: "Beast II",
        processor: "Selenium II",
        price: 300,
        memory: 16,
        accessories: ["Super fan", "cleaning set", "coffee cup holder"],
        info: {
          model: "XL",
          notes: "high quality",
          energyclass: "D",
        },
      },
      {
        number: 2,
        name: "Beast III",
        processor: "MotorOlè",
        price: 123,
        memory: 1,
        accessories: ["Super fan", "Cooling system", "super power supply"],
        info: {
          model: "GT",
          notes: "no comments",
          energyclass: "C",
        },
      },
      {
        number: 4,
        name: "BigFlop Mark II",
        processor: "MotorOlè",
        price: 25,
        memory: 16,
        accessories: ["coffee cup holder", "super power supply", "Super fan"],
        info: {
          model: "XL",
          notes: "no comments",
          energyclass: "C",
        },
      },
    ];
    expect(
      computerStorage.get_memory_of_computer_by_name("BigFlop Mark II")
    ).toEqual(16);
  });

  test("Test 2: If a parameter searchValue is found but is not matching with the object return empty array", () => {
    expect(computerStorage.get_memory_of_computer_by_name("fake")).toEqual(
      null
    );
  });

  test("Test 3: missing parameter throws an exception: 'missing parameter'", () => {
    expect(() => computerStorage.get_memory_of_computer_by_name()).toThrow(
      "missing parameter"
    );
  });
});

// ### **get_computer_accessories(searchKey)**

describe("Test Cases for get_computer_accessories(searchKey)", () => {
  const computerStorage = new ComputerStorage(computers);

  test("Test 1: If a parameter searchValue is the accessory of the computer to be searched Returns an array of computer objects of given accessories.", () => {
    const expectedValue = [
      {
        number: 2,
        name: "Beast III",
        processor: "MotorOlè",
        price: 123,
        memory: 1,
        accessories: ["Super fan", "Cooling system", "super power supply"],
        info: {
          model: "GT",
          notes: "no comments",
          energyclass: "C",
        },
      },
    ];
    expect(computerStorage.get_computer_accessories(2)).toEqual([
      "Super fan",
      "Cooling system",
      "super power supply",
    ]);
  });

  test("Test 2: If a parameter searchValue is found but is not matching with the object return empty array", () => {
    expect(computerStorage.get_computer_accessories(6)).toEqual([]);
  });
});

// ### **get_a_computer_matching_number(searchKey)**

describe("Test Cases for get_a_computer_matching_number(searchKey)", () => {
  const computerStorage = new ComputerStorage(computers);

  test("Test 1: If a parameter searchValue is the accessory of the computer to be searched Returns an array of computer objects of given accessories.", () => {
    const expectedValue = {
      number: 3,
      name: "King 3000",
      processor: "Selenium II",
      price: 200,
      memory: 2,
      accessories: ["super power supply", "Super fan", "coffee cup holder"],
      info: {
        model: "GT",
        notes: "no comments",
        energyclass: "A",
      },
    };
    expect(computerStorage.get_a_computer_matching_number(3)).toEqual(
      expectedValue
    );
  });

  test("Test 2: If a parameter searchValue is found but is not matching with the object return empty array", () => {
    expect(computerStorage.get_a_computer_matching_number(10)).toEqual(null);
  });

  test("Test 3: missing parameter throws an exception: 'missing parameter'", () => {
    expect(() => computerStorage.get_a_computer_matching_number()).toThrow(
      "missing parameter"
    );
  });
});

### **get_total_price_of_computers_by_processor(searchValue)**

returns the total price of all computers that have the same processor than the given searchValue

> Parameters:
>
> > searchValue is the processor of the computer to be searched

> Returns:
>
> > total cumulative price of computers matching the searchValue

> Throws:
>
> > if no computer with the given searchValue is found throws an exeption `'nothing found with given'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown