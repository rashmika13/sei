const groceryList = [
  { item: "Cilantro", done: true },
  { item: "Butter", done: false },
  { item: "Milk", done: false },
  { item: "Juice", done: false },
];

module.exports = {
  getAll: function () {
    return groceryList;
  },
};
