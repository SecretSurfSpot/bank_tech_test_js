'use strict';

describe('Bank Account Unit Tests', function() {
  var bankAccount;
  var date  = new Date().toLocaleDateString('en-GB');

  beforeEach(function(){
   bankAccount = new BankAccount();
  });

  describe('makeDeposit', function() {
    it('increases the balance by value passed to makeDeposit', function(){
      bankAccount.makeDeposit(100);
      expect(bankAccount.balance).toEqual(100);
    });
  });

  describe('makeWithdrawal', function() {
    it('reduces the balance by value passed to makeWithdrawal', function(){
      bankAccount.balance = 1000;
      bankAccount.makeWithdrawal(200);
      expect(bankAccount.balance).toEqual(800);
    });
  });

});
