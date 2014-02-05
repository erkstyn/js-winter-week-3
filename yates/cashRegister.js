var cashRegister = {
  amount: 0,

  add: function add(balance) {
    this.amount += balance;
  },

  subtract: function subtract(balance) {
    this.amount -= balance;
  },
  
  total: function total() {
    return this.amount;
  }
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());