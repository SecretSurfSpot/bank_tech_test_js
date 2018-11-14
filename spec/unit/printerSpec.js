'use strict';

describe('Printer Unit Tests', function() {
  var printer;

  beforeEach(function(){
    printer = new Printer();
  });

  describe('printStatement', function() {
    it('prints the header at the top', function(){
      printer.printStatement();
      expect(printer.printStatement()).toEqual('date || credit || debit || balance');
    });
  });


});
