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
      expect(bankAccount.balance).toEqual(100);
    });
  });

  describe('makeWithdrawal', function() {
    it('reduces the balance by value passed to makeWithdrawal', function(){
      spyOn(bankAccount, 'balance').and.returnValue(1000);
      bankAccount.makeWithdrawal(200);
      exepect(bankAccount.balance).toEqual(800);
    });
  });

});
