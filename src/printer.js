'use strict';

(function(exports) {

  function Printer(header = '') {
    this.header = header;
  }

  Printer.prototype.printStatement = function(transactionLog) {
    var transactions = transactionLog;
    transactions.reverse();
    let statement = this._statementHeader();

    for(var i = 0; i < transactions.length; i++) {
      var transaction = transactions[i];
      statement = statement.concat('\n');

      for(var j = 0; j < transaction.length; j++) {
        if (j === 0) {
          statement = statement.concat(`${transaction[j]} `);
        } else {
          if (transaction[j] === '') {
            var statementInput = ''
          } else {
            statementInput = transaction[j].toFixed(2);
          }
          statement = statement.concat(`|| ${statementInput} `);
        };
      };
    };

    return statement;
  };

  Printer.prototype._statementHeader = function() {
    this.header = 'date || credit || debit || balance';
    return this.header;
  };

  exports.Printer = Printer;
})(this);
