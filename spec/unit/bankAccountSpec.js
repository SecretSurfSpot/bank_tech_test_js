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
    it('prints the statement', function() {
      bankAccount.transaction =
        [{date: `${date}`, credit: 1000, debit: '', balance: 1000},
        {date: `${date}`, credit: 2000, debit: '', balance: 3000},
        {date: `${date}`, credit: '', debit: 500, balance: 2500}];
        expect(bankAccount.printStatement()).
          toEqual(
            'date || credit || debit || balance\n' +
            `${date}` + ' ||  || 500.00 || 2500.00\n' +
            `${date}` + ' || 2000.00 ||  || 3000.00\n' +
            `${date}` + ' || 1000.00 ||  || 1000.00');

    });
  });

});
