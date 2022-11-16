"use strict";

const temp = new Array(19).fill(2);
console.log(temp);

const mapped = temp.map((value) => value + 5);
console.log(mapped);
console.log(temp);

const mapped2 = temp.map((value) => [value + 4]);
console.log(mapped2);

const testValues = new Array(19).fill(2).map((value, ind) => [value + ind]);
console.log(testValues);

const ubound = [];
for (let u = 2; u <= 20; u++) {
  ubound.push([u]);
}
console.log(ubound);

let a = 6.0;
console.log(a === Math.floor(a));
