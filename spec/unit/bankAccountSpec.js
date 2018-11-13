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

  describe('addTransaction', function(){
    it('it stores transaction data in a transaction[] array', function() {
      bankAccount.addTransaction(1000, 0, 1000);
      bankAccount.addTransaction(2000, 0, 3000);
      console.log('adds transactions: ' + bankAccount.transaction + ' to transaction array');
      expect(bankAccount.transaction.length).toEqual(2);
      expect(bankAccount.transaction[0]).toEqual([Date(),1000,0,1000]);
      expect(bankAccount.transaction[1]).toEqual([Date(),2000,0,3000]);
    });
  });

  describe('isNumberPositive', function(){
    it('throws an error if a negative number is given', function(){
      expect(function() { bankAccount.isNumberPositive(-100) }).toThrowError('Error: amount must be positive');
    });
  });

});
