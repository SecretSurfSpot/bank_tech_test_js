'use strict';

describe('Printer Unit Tests', function() {
  var printer;
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth()+1;
  var day = today.getDate();
  var formattedDate = year + '/' + month + '/' + day;

  beforeEach(function(){
    printer = new Printer();
  });

  describe('printStatement', function() {
    it('prints the statement', function(){
      expect(printer.printStatement(
        [[`${formattedDate}`,1000,'',1000],
        [`${formattedDate}`,2000,'',3000],
        [`${formattedDate}`,'',500,2500]])).
        toEqual(
          'date || credit || debit || balance\n' +
          `${formattedDate}` + ' ||  || 500.00 || 2500.00 \n' +
          `${formattedDate}` + ' || 2000.00 ||  || 3000.00 \n' +
          `${formattedDate}` + ' || 1000.00 ||  || 1000.00 ');
    });
  });

  describe('statementHeader', function(){
    it('returns the statement header', function(){
      expect(printer.statementHeader()).toEqual('date || credit || debit || balance');
    });
  });

});
