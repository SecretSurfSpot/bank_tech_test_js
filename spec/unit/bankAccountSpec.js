'use strict';

describe('Bank Account', function() {
  var bankAccount;

   beforeEach(function(){
     bankAccount = new bankAccount();
   });

  it('starts with a balance of zero', function(){
    expect(bankAccount.balance).toEqual(0);
  });

});
