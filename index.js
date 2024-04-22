const assert = require('assert');

class BankAccount{
  constructor(accountNumber, owner){
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }
  deposit(amt){
    let transaction = new Transaction(amt, "DEPOSIT")
    this.transactions.push(transaction)
  }
charge(amt, payee){
  let transaction = new Transaction(amt, payee)
  this.transactions.push(transaction)
}
balance(){
  let balance = 0
  this.transactions.forEach(t =>{
    balance = Number(balance) + Number(t.amount)
  })
  return balance
}
}

class Transaction{
  constructor(amount, payee){
    this.date = new Date();
    this.amount = amount;
    this.payee = payee;
  }
}

let cAccount = new BankAccount('0003', "Cesar")
cAccount.deposit('300')
cAccount.charge('-20', "Target")
console.log(cAccount.balance())
cAccount.charge('-50', "Whataburger")
cAccount.charge('-20', "Chipotle")
console.log(cAccount.balance())

// const transaction1 = new Transaction("100", "Target")
// console.log(transaction1)

if (typeof describe === 'function'){
  describe('BankAccount', function(){
    it('should have a accountNumber, a owner, a transactions', function(){
      let testAccount = new BankAccount("0001", "Test")
      
      assert.equal(testAccount.owner, 'Test');
      assert.equal(testAccount.accountNumber, '0001');
      assert.equal(testAccount.transactions.length, '0');
    });

    it('should make a deposit with a given value', function(){
      let testAccount = new BankAccount("0001", "Test")
      testAccount.deposit("500")
      assert.equal(testAccount.transactions[0].amount, '500');
      assert.equal(testAccount.transactions[0].payee, 'DEPOSIT');
      assert.equal(testAccount.transactions[0].date.getDate(), new Date().getDate());
    });
    it('should make a charge with a given value and payee', function(){
      let testAccount = new BankAccount("0001", "Test")
      testAccount.charge("-300", "Wal-Mart")
      assert.equal(testAccount.transactions[0].amount, '-300');
      assert.equal(testAccount.transactions[0].payee, 'Wal-Mart');
      assert.equal(testAccount.transactions[0].date.getDate(), new Date().getDate());
    });
    it('should give us the account balance', function(){
      let testAccount = new BankAccount("0001", "Test")
      testAccount.charge("-300", "Wal-Mart")
      assert.equal(testAccount.balance(), '-300');
    });

  });
  describe('Transaction', function(){
    it('should have a amount, a payee, a date', function(){
      let testTransaction = new Transaction("100", "Target")
      assert.equal(testTransaction.amount, '100');
      assert.equal(testTransaction.payee, 'Target');
      assert.equal(testTransaction.date.getDate(), new Date().getDate());
    });

  });

}
