"use strict";

const search = require("./carStorageFileCallback");

search(consle.log);
console.log("##### one #####");
search((console.log, "model", "Bored T-model"));
console.log("##### two #####");
search((data) => console.log(data), "licence", "ABC-1");
console.log("##### three #####");

function printData(data) {
  console.log("#########");
  console.log(data);
  console.log("#########");
}
