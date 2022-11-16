const ComputerStorage = require("./computerStorage");
const computers = require("./computerData.json");

const computerStorage = new ComputerStorage(computers);
// console.log(computerStorage);
// get_All_Computers_By_Processors(searchValue);
// console.log(computerStorage.get_All_Computers_By_Processors("Selenium II"));
// console.log(computerStorage.get_memory_of_computer_by_name("Beast II"));
// console.log(computerStorage.get_memory_of_computer_by_name());
// console.log(computerStorage.get_computer_accessories(6));
// console.log(computerStorage.get_a_computer_matching_number(1));
// console.log(computerStorage.get_a_computer_matching_number(52));
// console.log(computerStorage.get_a_computer_matching_number());
console.log(
  computerStorage.get_total_price_of_computers_by_processor("Selenium II")
);
