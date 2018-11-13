'use strict';

(function(exports) {

  function BankAccount(balance = 0) {
    this.balance = balance;
  }

  BankAccount.prototype.makeDeposit = function (amount) {
    this.balance += amount;
  };

  exports.BankAccount = BankAccount;
})(this);
