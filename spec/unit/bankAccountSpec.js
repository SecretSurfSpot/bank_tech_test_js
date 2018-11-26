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

  describe('printStatement', function() {
    it('executes and makes a call to the (mock) Printer.printStatement function', function() {
      let mockPrinter = { printStatement: function(transaction) {return transaction}}
      bankAccount = new BankAccount(mockPrinter);
      expect(bankAccount.printStatement()).toEqual([]);
      console.log("test ran");
      console.log(`mockPrinter._statementHeader is: ${mockPrinter.printStatement()}`)
    });
  });

});
