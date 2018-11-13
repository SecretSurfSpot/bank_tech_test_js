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

    describe('Make Deposit', function(){
      it('should increase balance by value passed to makeDeposit', function(){
        bankAccount.makeDeposit(100);
        expect(bankAccount.balance).toEqual(100);
      });
    });


  });

});
