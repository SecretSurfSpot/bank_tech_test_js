'use strict';

(function(exports) {

  function Printer() {}

  Printer.prototype.printStatement = function() {
    let statement = 'date || credit || debit || balance';
    return statement;
  };

  exports.Printer = Printer;
})(this);
