'use strict';

(function(exports) {

  function BankAccount(balance = 0, transaction = [], printer = new Printer, date = '') {
    this.balance = balance;
    this.transaction = transaction;
    this.printer = printer;
    this.date = date;
  }

  BankAccount.prototype.makeDeposit = function (amount) {
    this.isInputANumber(amount);
    this.isNumberPositive(amount);
    this.balance += amount;
    console.log('balance after makeDeposit() is: ' + this.balance);
    this.addTransaction(amount, '', this.balance);
  };

  BankAccount.prototype.makeWithdrawal = function (amount) {
    this.isInputANumber(amount);
    this.isNumberPositive(amount);
    this.balance -= amount;
    console.log('balance after makeWithdrawal() is: ' + this.balance);
    this.addTransaction('', amount, this.balance);
  };

  BankAccount.prototype.addTransaction = function (credit, debit, balance) {
    this.date = this.getFormattedDate();
    this.transaction.push([this.date, credit, debit, balance]);
    console.log('after addTransaction, transaction[] contains: ' + this.transaction);
  };

  BankAccount.prototype.isInputANumber = function (amount) {
    console.log('Amount passed to isInputANumber is: ' + amount);
    if (isNaN(amount)) throw new Error('Error: input must be a number');
  };

  BankAccount.prototype.isNumberPositive = function (amount) {
    if (amount <=0) throw new Error('Error: amount must be positive');
  };

  BankAccount.prototype.printStatement = function (transaction) {
    return this.printer.printStatement(this.transaction);
  };

  BankAccount.prototype.getFormattedDate = function () {
    var today = new Date();

    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var day = today.getDate();

    var formattedDate = year + '/' + month + '/' + day;
    return formattedDate;
  };

  exports.BankAccount = BankAccount;
})(this);
