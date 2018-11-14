'use strict';

describe('Printer Unit Tests', function() {
  var printer;

  beforeEach(function(){
    printer = new Printer();
  });

  describe('printStatement', function() {
    it('prints the statement', function(){
      expect(printer.printStatement(
        [[Date(),1000,0,1000],
        [Date(),2000,0,3000],
        [Date(),0,500,2500]])).
        toEqual(
          'date || credit || debit || balance\n' +
          `${Date()}` + ' || 0 || 500 || 2500 \n' +
          `${Date()}` + ' || 2000 || 0 || 3000 \n' +
          `${Date()}` + ' || 1000 || 0 || 1000 ');
    });
  });

});
