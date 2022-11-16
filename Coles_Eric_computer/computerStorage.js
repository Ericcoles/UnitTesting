"use strict";

module.exports = class ComputerStorage {
  constructor(data) {
    if (!data) throw new Error("data storage missing");
    this.computerData = data;
  }

  get_All_Computers_By_Processors(searchValue) {
    if (searchValue) {
      const computers = this.computerData.filter(
        (computer) => computer.processor === searchValue
      );
      if (computers.length > 0) {
        return computers.map((computer) => computer);
      }
      if (computers.length <= 0) {
        return [];
      }
    }
    throw new Error("missing parameter");
  }

  get_memory_of_computer_by_name(searchKey) {
    if (searchKey) {
      const computer = this.computerData.find(
        (computer) => computer.name === searchKey
      );

      if (computer) {
        return computer.memory;
      }

      return null;
    }

    throw new Error("missing parameter");
  }

  get_computer_accessories(searchKey) {
    if (searchKey) {
      const computer = this.computerData.find(
        (computer) => computer.number === searchKey
      );

      if (computer) {
        return computer.accessories;
      } else if (
        !computer ||
        computer.accessories.length <= 0 ||
        !computer.accessories
      )
        return [];
    }
  }

  get_a_computer_matching_number(searchKey) {
    if (searchKey) {
      const computer = this.computerData.find(
        (computer) => computer.number === searchKey
      );
      if (computer) {
        return computer;
      }
      if (!computer) {
        return null;
      }
    }
    throw new Error("missing parameter");
  }

  get_total_price_of_computers_by_processor(searchValue) {
    if (searchValue) {
      const computers = this.computerData.filter(
        (computer) => computer.processor === searchValue
      );
      if (computers.length > 0) {
        return computers.reduce((pre, cur) => pre + cur.price, 0);
      }
      throw new Error("nothing found with given");
    }
    throw new Error("missing parameter");
  }
};
