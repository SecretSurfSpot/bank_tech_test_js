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

    it('calls isInputANumber', function(){
      spyOn(bankAccount, 'isInputANumber');
      bankAccount.makeDeposit('one hundred');
      expect(bankAccount.isInputANumber).toHaveBeenCalledWith('one hundred');
    });

    it('calls isNumberPositive', function(){
      spyOn(bankAccount, 'isNumberPositive');
      bankAccount.makeDeposit(-100);
      expect(bankAccount.isNumberPositive).toHaveBeenCalledWith(-100);
    });

    it('calls addTransaction', function(){
      spyOn(bankAccount, 'addTransaction');
      bankAccount.makeDeposit(1000);
      expect(bankAccount.addTransaction).toHaveBeenCalledWith(1000,'',1000);
    });
  });

  describe('makeWithdrawal', function() {
    it('reduces the balance by value passed to makeWithdrawal', function(){
      bankAccount.balance = 1000;
      bankAccount.makeWithdrawal(200);
      expect(bankAccount.balance).toEqual(800);
    });

    it('calls isInputANumber', function(){
      spyOn(bankAccount, 'isInputANumber');
      bankAccount.makeWithdrawal('one hundred');
      expect(bankAccount.isInputANumber).toHaveBeenCalledWith('one hundred');
    });

    it('calls isNumberPositive', function(){
      spyOn(bankAccount, 'isNumberPositive');
      bankAccount.makeWithdrawal(-100);
      expect(bankAccount.isNumberPositive).toHaveBeenCalledWith(-100);
    });

    it('calls addTransaction', function(){
      spyOn(bankAccount, 'addTransaction');
      bankAccount.makeDeposit(2000);
      bankAccount.makeWithdrawal(1000);
      expect(bankAccount.addTransaction).toHaveBeenCalledWith('',1000,1000);
    });
  });

  describe('addTransaction', function(){

    it('it stores transaction data in a transaction[] array', function() {
      bankAccount.addTransaction(1000, '', 1000);
      bankAccount.addTransaction(2000, '', 3000);
      expect(bankAccount.transaction.length).toEqual(2);
      expect(bankAccount.transaction[0]).toEqual([`${date}`,1000,'',1000]);
      expect(bankAccount.transaction[1]).toEqual([`${date}`,2000,'',3000]);
    });
  });

  describe('isNumberPositive', function(){
    it('throws an error if a negative number is given', function(){
      expect(function() { bankAccount.isNumberPositive(-100) }).toThrowError('Error: amount must be positive');
    });
  });

  describe('isInputANumber', function(){
    it('throws an error if input is NaN', function(){
      expect(function() { bankAccount.isInputANumber('one hundred') }).toThrowError('Error: input must be a number');
    });
  });

  describe('getFormattedDate',function(){
    it('formats date', function() {
      expect(bankAccount.getFormattedDate()).toEqual(`${date}`);
    });
  });

});
