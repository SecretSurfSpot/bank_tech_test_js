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

});
