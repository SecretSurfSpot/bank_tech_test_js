'use strict';

describe('Feature Tests', function() {
  var date  = new Date().toLocaleDateString('en-GB');

  describe('Bank Account', function(){
    var bankAccount;

    beforeEach(function(){
      bankAccount = new BankAccount();
    });

    describe('makeDeposit', function(){
      it('should increase balance by value passed to makeDeposit', function(){
        bankAccount.makeDeposit(1000);
        expect(bankAccount.balance).toEqual(1000);
      });

      it('throws an error if the input is NaN',function(){
        expect(function() { bankAccount.makeDeposit('one hundred') }).toThrowError('Error: input must be a number');
      });

      it('throws an error if a negative value is given', function(){
        expect(function() { bankAccount.makeDeposit(-100) }).toThrowError('Error: amount must be positive');
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
        expect(bankAccount.transaction[0].credit).toEqual(1000);
        expect(bankAccount.transaction[1].credit).toEqual(2000);
        expect(bankAccount.transaction[1]).toEqual({date: `${date}`,credit: 2000, debit: '', balance: 3000});
      });

      it('is written to by makeWithdrawal', function(){
          bankAccount.makeDeposit(1000);
          bankAccount.makeWithdrawal(500);
          expect(bankAccount.transaction.length).toEqual(2);
          expect(bankAccount.transaction[0].credit).toEqual(1000);
          expect(bankAccount.transaction[1].debit).toEqual(500);
          expect(bankAccount.transaction[1]).toEqual({date: `${date}`,credit: '', debit: 500, balance: 500});
      });
    });

  });

  describe('Printer', function(){
    var bankAccount;
    var printer;

    beforeEach(function(){
      bankAccount = new BankAccount();
      printer = new Printer();
    });

    describe('printStatement', function() {
      it('prints the statement', function(){
        bankAccount.makeDeposit(1000);
        bankAccount.makeDeposit(2000);
        bankAccount.makeWithdrawal(500);
        expect(bankAccount.printStatement()).
          toEqual(
            'date || credit || debit || balance\n' +
            `${date}` + ' ||  || 500.00 || 2500.00\n' +
            `${date}` + ' || 2000.00 ||  || 3000.00\n' +
            `${date}` + ' || 1000.00 ||  || 1000.00');
      });
    });

  });

});
