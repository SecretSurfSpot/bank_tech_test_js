'use strict';

describe('Unit Test', function() {
  var bankAccount;

  beforeEach(function(){
   bankAccount = new BankAccount();
  });

  describe('balance', function(){
    it('starts with a balance of zero', function(){
      expect(bankAccount.balance).toEqual(0);
    });
  });

  describe('makeDeposit', function() {
    it('increases the balance by value passed to makeDeposit', function(){
      bankAccount.makeDeposit(100);
      console.log('balance during Unit Test makeDeposit is: ' + bankAccount.balance);
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
