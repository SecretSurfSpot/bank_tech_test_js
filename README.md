# Bank Tech Test

Banking Application, created with JavaScript and Jasmine (testing framework), using BDD, TDD and OOP principles.

## Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

## Acceptance Criteria

**Given** a client makes a **deposit** of 1000 on 10-01-2012 <br />
**And** a **deposit** of 2000 on 13-01-2012 <br />
**And** a **withdrawl** of 500 on 14-01-2012 <br />
**When** she **prints** her bank statement <br />
**Then** she would see: <br />

date || credit || debit || balance <br />
14/01/2012 || || 500.00 || 2500.00 <br />
13/01/2012 || 2000.00 || || 3000.00 <br />
10/01/2012 || 1000.00 || || 1000.00 <br />

## The Application (bank_tech_test)

The project can be found here:
https://github.com/SecretSurfSpot/bank_tech_test_js

### Installation
- Clone the repo to your local machine:
`git clone https://github.com/SecretSurfSpot/bank_tech_test_js.git`

### Testing
To test the application:
- Navigate to the project root (bank_tech_test_js)
- In the project root execute `open -a "Google Chrome" SpecRunner.html`
- Interact with the application via the Chrome Console `cmd+alt+j` and run the following commands:
- `Bank_Acc = new BankAccount();` *creates a new BankAccount object*
- `Bank_Acc.makeDeposit(1000);` *deposits £1000*
- `Bank_Acc.makeDeposit(2000);` *deposits £2000*
- `Bank_Acc.makeWithdrawal(500);` *withdraws £500*
- `Bank_Acc.printStatement` *prints a bank statement, as per the format shown in the Acceptance Criteria section (and screenshot below)*

The above commands result in the output shown in the screenshot below:

![Chrome Console Screenshot](https://github.com/SecretSurfSpot/bank_tech_test_js/blob/master/images/Screen%20Shot%202018-11-15%20at%2014.58.34.png)

## Domain Model

The model below illustrates the high-level structure of the application.

Two main objects (constructor functions):

1. **BankAccount:** Takes inputs for both deposit and withdrawal amounts, keeps track of the balance and also maintains the transaction log
2. **Printer:** Takes the transactions as input (from the BankAccount constructor function's function: BankAccount.printStatement()), formats it then prints it

```
    User
╔═════════════╗  
║             ║ Interacts with application
║  Browser    ║ via REPL, e.g. Chrome Console (cmd+alt+j)     
║             ║
╚═════════════╝
       |
       |
       |                                   
╔═════════════╗     
║             ║ public functions:  makeDeposit, makeWithdrawal & printStatement
║ BankAccount ║                  
║(constructor)║ private functions: _addTransaction, _isInputANumber,            
╚═════════════╝                    _isNumberPositive & _getFormattedDate    
       |
       |
       V                             
╔═════════════╗
║             ║ public function:  printStatement
║   Printer   ║                  
║(constructor)║ private function: statementHeader
╚═════════════╝            

```
