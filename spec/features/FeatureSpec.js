'use strict';

describe('Feature Tests', function() {
  var date  = new Date().toLocaleDateString('en-GB');

  describe('Bank Account', function(){
    var bankAccount;

    beforeEach(function(){
      bankAccount = new BankAccount();
    });

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
        expect(bankAccount.transaction[1]).toEqual([`${date}`,2000,'',3000]);
      });

      it('is written to by makeWithdrawal', function(){
          bankAccount.makeDeposit(1000);
          bankAccount.makeWithdrawal(500);
          expect(bankAccount.transaction.length).toEqual(2);
          expect(bankAccount.transaction[0].length).toEqual(4);
          expect(bankAccount.transaction[1].length).toEqual(4);
          expect(bankAccount.transaction[1]).toEqual([`${date}`,'',500,500]);
      });
    });

    describe('isNumberPositive',function(){
      it('throws an error if a negative value is given', function(){
        expect(function() { bankAccount.makeDeposit(-100) }).toThrowError('Error: amount must be positive');
      });
    });

    describe('isInputANumber', function(){
      it('throws an error if the input is NaN',function(){
        expect(function() { bankAccount.makeDeposit('one hundred') }).toThrowError('Error: input must be a number');
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
            `${date}` + ' ||  || 500.00 || 2500.00 \n' +
            `${date}` + ' || 2000.00 ||  || 3000.00 \n' +
            `${date}` + ' || 1000.00 ||  || 1000.00 ');
      });
    });

  });

});
