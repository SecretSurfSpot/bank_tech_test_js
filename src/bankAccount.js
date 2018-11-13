'use strict';

(function(exports) {

  function BankAccount(balance = 0, transaction = []) {
    this.balance = balance;
    this.transaction = transaction;
    console.log('balance is initially: ' + this.balance);
  }

  BankAccount.prototype.makeDeposit = function (amount) {
    this.isNumberPositive(amount);
    this.balance += amount;
    console.log('balance after makeDeposit() is: ' + this.balance);
    this.addTransaction(amount, 0, this.balance);
  };

  BankAccount.prototype.makeWithdrawal = function (amount) {
    this.balance -= amount;
    console.log('balance after makeWithdrawal() is: ' + this.balance);
    this.addTransaction(0, amount, this.balance);
  };

  BankAccount.prototype.addTransaction = function (credit, debit, balance) {
    this.transaction.push([Date(), credit, debit, balance]);
    console.log('after addTransaction, transaction[] contains: ' + this.transaction);
    console.log('transactions has: ' + this.transaction.length + ' elements');
  };

  BankAccount.prototype.isNumberPositive = function (amount) {
    if (amount <=0) throw new Error('Error: amount must be positive');
  };

  exports.BankAccount = BankAccount;
})(this);
