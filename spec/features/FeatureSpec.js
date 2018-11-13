'use strict';

describe('Features Spec', function() {

  describe('Bank Account', function(){
    var bankAccount;

     beforeEach(function(){
       bankAccount = new bankAccount();
     });

    it('should start with a balance of zero', function(){
        expect(bankAccount.balance).toEqual(0);
    });



  });


});
