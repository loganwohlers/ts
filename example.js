"use strict";
//syntax for non arrow fn inside an object here, don't need to explicity do key/value just writing out the fn works.  we WANT to have a scoped this value so we don't use ARROW
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
