type BankAccount = { money: number; deposit(value: number): void };

//syntax for non arrow fn inside an object here, don't need to explicity do key/value just writing out the fn works.  we WANT to have a scoped this value so we don't use ARROW
let bankAccount: BankAccount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  }
};

let myself: { name: string; bankAccount: BankAccount; hobbies: string[] } = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
