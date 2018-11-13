'use strict';

(function(exports) {

  function BankAccount(balance = 0) {
    this.balance = balance;
    console.log('balance is initially: ' + this.balance);
  }

  BankAccount.prototype.makeDeposit = function (amount) {
    this.balance += amount;
    console.log('balance after makeDeposit() is: ' + this.balance);
  };

  BankAccount.prototype.makeWithdrawal = function (amount) {
    this.balance -= amount;
    console.log('balance after makeWithdrawal() is: ' + this.balance);
  };

  exports.BankAccount = BankAccount;
})(this);
