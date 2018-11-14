'use strict';

(function(exports) {

  function Printer(header = '') {
    this.header = header;
  }

  Printer.prototype.printStatement = function(transactionsLog) {
    var transactions = transactionsLog;
    transactions.reverse();
    // let statement = 'date || credit || debit || balance';
    let statement = this.statementHeader();

    for(var i = 0; i < transactions.length; i++) {
      var transaction = transactions[i];
      statement = statement.concat('\n');

      for(var j = 0; j < transaction.length; j++) {
        if (j === 0) {
          statement = statement.concat(`${transaction[j]} `);
        } else {
          statement = statement.concat(`|| ${transaction[j]} `);
        };
      };
    };
    return statement;
  };

  exports.Printer = Printer;
})(this);
