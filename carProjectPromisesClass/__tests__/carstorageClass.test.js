"use strict";

const Storage = require("../carstorageClass");

describe("testing class with cars.json", () => {
  const carStorage = new Storage("./cars.json");

  test("test find with licence ABC-1", () => {
    const expectedResult = [{ model: "Bored T-model", licence: "ABC-1" }];

    return expect(carStorage.find("licence", "ABC-1")).resolves.toEqual(
      expectedResult
    );
  });

  test("test find with wrong key", () => {
    return expect(carStorage.find("color", "blue")).rejects.toBe(
      "key not found"
    );
  });

  test("test missing parameter", () => {
    return expect(carStorage.find("model")).rejects.toBe("parameter missing");
  });

  test("test model with Bored T-model", () => {
    return expect(carStorage.find("model", "Bored T-model")).resolves.toEqual([
      { model: "Bored T-model", licence: "ABC-1" },
      { model: "Bored T-model", licence: "GTF-10" },
    ]);
  });
});

describe("wrong filename", () => {
  test("testing with file x.json", () => {
    const storage = new Storage("./x.json");
    return expect(storage.find("licence", "ABC-1")).rejects.toBe("read error");
  });
});

// "use strict";

// const Storage = require("../carstorageClass.js");

// describe("testing class with cars.json", () => {
//   const carStorage = new Storage("./cars.json");

//   test("testing find with licence ABC-1", () => {
//     const expectedResult = [{ model: "Bored T-model", licence: "ABC-1" }];
//     return expectedResult(carStorage.find("licence", "ABC-1")).resolves.toEqual(
//       expectedResult
//     );
//   });
// });

// test("test find with wrong key", () => {
//   return expect(carStorage.find("color", "blue")).rejects.toBe("key not found");
// });

// test("test missing parameter", () => {
//   return expect(carStorage.find("model")).rejects.toBe("parameter missing");
// });

// test('test model with Bored T-model', ()=>{
//   return expect(carStorage.find('model','Bored T-model')).resolves.toEqual([
//     {"model":"Bored T-model", "licence":"ABC-1"},
//     {"model":"GTX", "licence":"B-1"}
//   ]);
// });
// });

// describe('wrong filename', ()=>{
//   test('testing with file x-json', ()=>{
//     const storage=new Storage('./x.json');
//     return expect(storage.find('licence', 'ABC-1')).rejects.toBe('read error');
//   });
// });
