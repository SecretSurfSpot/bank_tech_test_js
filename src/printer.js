'use strict';

(function(exports) {

  function Printer(header = '') {
    this.header = header;
  }

  Printer.prototype.printStatement = function(transactions) {
    this.transactions = transactions;

    this.transactions = this._reverseArray();
    let statement = this._statementHeader();

    statement = statement.concat('\n');
    for (let t of transactions) {
      if (t.credit === '') {
        statement = statement.concat(`${t.date} || ${t.credit} || ${t.debit.toFixed(2)} || ${t.balance.toFixed(2)}\n`);
      } else if (t.debit === '') {
        statement = statement.concat(`${t.date} || ${t.credit.toFixed(2)} || ${t.debit} || ${t.balance.toFixed(2)}\n`);
      }
    }
    statement = statement.trim();
    console.log(statement);
    return statement;
  };

  Printer.prototype._statementHeader = function() {
    this.header = 'date || credit || debit || balance';
    return this.header;
  };

  Printer.prototype._reverseArray = function() {
    this.transactions.reverse();
    return this.transactions;
  };

  exports.Printer = Printer;
})(this);
