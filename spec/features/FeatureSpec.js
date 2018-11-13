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
        bankAccount.makeDeposit(100);
        expect(bankAccount.balance).toEqual(100);
      });
    });

    describe('makeWithdrawal', function() {
      it('should reduce balance by value passed to makeWithdrawal', function(){
        bankAccount.makeDeposit(1000);
        bankAccount.makeWithdrawal(200);
        expect(bankAccount.balance).toEqual(800);
      });
    });


  });

});
