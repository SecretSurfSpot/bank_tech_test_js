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
        [[`${formattedDate}`,1000,0,1000],
        [`${formattedDate}`,2000,0,3000],
        [`${formattedDate}`,0,500,2500]])).
        toEqual(
          'date || credit || debit || balance\n' +
          `${formattedDate}` + ' || 0 || 500 || 2500 \n' +
          `${formattedDate}` + ' || 2000 || 0 || 3000 \n' +
          `${formattedDate}` + ' || 1000 || 0 || 1000 ');
    });
  });

});
