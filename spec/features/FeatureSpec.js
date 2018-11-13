'use strict';

describe('Features Spec', function() {
  var bankAccount;

  beforeEach(function(){
    bankAccount = new BankAccount();
  });

  describe('Bank Account', function(){

     describe('balance', function(){
      it('should start with a balance of zero', function(){
        expect(bankAccount.balance).toEqual(0);
      });
    });

    describe('makeDeposit', function(){
      it('should increase balance by value passed to makeDeposit', function(){
        bankAccount.makeDeposit(1000);
        expect(bankAccount.balance).toEqual(1000);
      });
    });

    describe('makeWithdrawal', function() {
      it('should reduce balance by value passed to makeWithdrawal', function(){
        bankAccount.makeDeposit(1000);
        bankAccount.makeWithdrawal(200);
        expect(bankAccount.balance).toEqual(800);
      });
    });

    describe('transactionLog', function() {
      it('is written to by makeDeposit', function() {
        bankAccount.makeDeposit(1000);
        bankAccount.makeDeposit(2000);
        expect(bankAccount.transaction.length).toEqual(2);
        expect(bankAccount.transaction[0].length).toEqual(4);
        expect(bankAccount.transaction[1].length).toEqual(4);
        expect(bankAccount.transaction[1]).toEqual([Date(),2000,0,3000]);
      });

      it('is written to by makeWithdrawal', function(){
          bankAccount.makeDeposit(1000);
          bankAccount.makeWithdrawal(500);
          expect(bankAccount.transaction.length).toEqual(2);
          expect(bankAccount.transaction[0].length).toEqual(4);
          expect(bankAccount.transaction[1].length).toEqual(4);
          expect(bankAccount.transaction[1]).toEqual([Date(),0,500,500]);
      });
    });

    describe('isNumberPositive',function(){
      it('will return an error is a negative number is given', function(){
        expect(function() { bankAccount.makeDeposit(-100) }).toThrowError('Error: amount must be positive');
      });
    });


  });
});
