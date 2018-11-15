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

    it('calls _isInputANumber', function(){
      spyOn(bankAccount, '_isInputANumber');
      bankAccount.makeDeposit('one hundred');
      expect(bankAccount._isInputANumber).toHaveBeenCalledWith('one hundred');
    });

    it('calls _isNumberPositive', function(){
      spyOn(bankAccount, '_isNumberPositive');
      bankAccount.makeDeposit(-100);
      expect(bankAccount._isNumberPositive).toHaveBeenCalledWith(-100);
    });

    it('calls _addTransaction', function(){
      spyOn(bankAccount, '_addTransaction');
      bankAccount.makeDeposit(1000);
      expect(bankAccount._addTransaction).toHaveBeenCalledWith(1000,'',1000);
    });
  });

  describe('makeWithdrawal', function() {
    it('reduces the balance by value passed to makeWithdrawal', function(){
      bankAccount.balance = 1000;
      bankAccount.makeWithdrawal(200);
      expect(bankAccount.balance).toEqual(800);
    });

    it('calls _isInputANumber', function(){
      spyOn(bankAccount, '_isInputANumber');
      bankAccount.makeWithdrawal('one hundred');
      expect(bankAccount._isInputANumber).toHaveBeenCalledWith('one hundred');
    });

    it('calls _isNumberPositive', function(){
      spyOn(bankAccount, '_isNumberPositive');
      bankAccount.makeWithdrawal(-100);
      expect(bankAccount._isNumberPositive).toHaveBeenCalledWith(-100);
    });

    it('calls _addTransaction', function(){
      spyOn(bankAccount, '_addTransaction');
      bankAccount.makeDeposit(2000);
      bankAccount.makeWithdrawal(1000);
      expect(bankAccount._addTransaction).toHaveBeenCalledWith('',1000,1000);
    });
  });

  describe('_addTransaction', function(){

    it('it stores transaction data in a transaction[] array', function() {
      bankAccount._addTransaction(1000, '', 1000);
      bankAccount._addTransaction(2000, '', 3000);
      expect(bankAccount.transaction.length).toEqual(2);
      expect(bankAccount.transaction[0]).toEqual([`${date}`,1000,'',1000]);
      expect(bankAccount.transaction[1]).toEqual([`${date}`,2000,'',3000]);
    });
  });

  describe('_isNumberPositive', function(){
    it('throws an error if a negative number is given', function(){
      expect(function() { bankAccount._isNumberPositive(-100) }).toThrowError('Error: amount must be positive');
    });
  });

  describe('_isInputANumber', function(){
    it('throws an error if input is NaN', function(){
      expect(function() { bankAccount._isInputANumber('one hundred') }).toThrowError('Error: input must be a number');
    });
  });

  describe('_getFormattedDate',function(){
    it('formats date', function() {
      expect(bankAccount._getFormattedDate()).toEqual(`${date}`);
    });
  });

});
