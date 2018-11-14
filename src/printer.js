'use strict';

(function(exports) {

  function Printer() {}

  Printer.prototype.printStatement = function(transactionsLog) {

    var transactions = transactionsLog;
    transactions.reverse();
    let statement = 'date || credit || debit || balance';

    console.log('111111 transactions has: ' + transactions.length + ' elements');

    for(var i = 0; i < transactions.length; i++) {
        var transaction = transactions[i];
        console.log('22222 element: ' + i + ' is: ' + transaction);
        statement = statement.concat('\n');
        console.log('33333 ' + statement);

        for(var j = 0; j < transaction.length; j++) {
          console.log('44444 inner element: ' + j + ' is ' + `${transaction[j]}`);
          if (j === 0) {
            statement = statement.concat(`${transaction[j]} `);
          } else {
            statement = statement.concat(`|| ${transaction[j]} `);
          }

        }
    }
    console.log('55555 at the end statement = \n' + statement);
    return statement;

  };

  exports.Printer = Printer;
})(this);
