'use strict';

describe('Printer Unit Tests', function() {
  var printer;
  var date  = new Date().toLocaleDateString('en-GB');

  beforeEach(function(){
    printer = new Printer();
  });

  describe('printStatement', function() {
    it('prints the statement', function(){
      expect(printer.printStatement(
        [{date: `${date}`, credit: 1000, debit: '', balance: 1000},
        {date: `${date}`, credit: 2000, debit: '', balance: 3000},
        {date: `${date}`, credit: '', debit: 500, balance: 2500}])).
        toEqual(
          'date || credit || debit || balance\n' +
          `${date}` + ' ||  || 500.00 || 2500.00\n' +
          `${date}` + ' || 2000.00 ||  || 3000.00\n' +
          `${date}` + ' || 1000.00 ||  || 1000.00');
    });
  });

});
