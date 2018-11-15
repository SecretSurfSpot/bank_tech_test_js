'use strict';

(function(exports) {

  function BankAccount(balance = 0, transaction = [], printer = new Printer, date = '') {
    this.balance = balance;
    this.transaction = transaction;
    this.printer = printer;
    this.date = date;
  }

  BankAccount.prototype.makeDeposit = function (amount) {
    this._isInputANumber(amount);
    this._isNumberPositive(amount);
    this.balance += amount;
    this._addTransaction(amount, '', this.balance);
  };

  BankAccount.prototype.makeWithdrawal = function (amount) {
    this._isInputANumber(amount);
    this._isNumberPositive(amount);
    this.balance -= amount;
    this._addTransaction('', amount, this.balance);
  };

  BankAccount.prototype.printStatement = function () {
    return this.printer.printStatement(this.transaction);
  };

  BankAccount.prototype._addTransaction = function (credit, debit, balance) {
    this.date = this._getFormattedDate();
    this.transaction.push([this.date, credit, debit, balance]);
  };

  BankAccount.prototype._isInputANumber = function (amount) {
    if (isNaN(amount)) throw new Error('Error: input must be a number');
  };

  BankAccount.prototype._isNumberPositive = function (amount) {
    if (amount <=0) throw new Error('Error: amount must be positive');
  };

  BankAccount.prototype._getFormattedDate = function () {
    var formattedDate  = new Date().toLocaleDateString('en-GB');
    return formattedDate;
  };



  exports.BankAccount = BankAccount;
})(this);
