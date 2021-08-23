class BankAccount {
    constructor(intRate = 0.08, balance= 0){
        this.balance = balance;
        this.intRate = intRate;
    }
    deposit(amount){
        this.balance += amount;
        return this;
    }
    withdraw(amount){
        this.balance -= amount;
        if(this.balance < 0){
            console.log("Insufficient fund: Charging a $ 5 fee")
            this.balance -= 5;
        }
        return this;
    }
    displayAccountInfo(){
        console.log(`Current balance: $${this.balance}, Interest Rate: $${this.intRate}`);
        return this;
    }
    yieldInterest(){
        this.balance += this.balance * this.intRate;
        return this;
    }
}

class User {
    constructor(userName, emailAddress){
        this.name = userName;
        this.emailAddress = emailAddress;
        this.account = new BankAccount();
    }
    makeDeposit(amount){
        this.account.deposit(amount);
        return this;
    }
    makeWithdrawal(amount){
        this.account.withdraw(amount);
        return this
    }
    displayAccountInfo(){
        console.log(`Name: ${this.name}, Account balance: $${this.account.balance}`);
        return this;
    }
}


const Nina = new User("Nina Rabei", "nina@gmail.com");
const Jane = new User("Jane Casian", "jane@gmail.com");

Nina.makeDeposit(150).makeDeposit(100).makeDeposit(250).makeWithdrawal(200).displayAccountInfo();
Jane.makeDeposit(200).makeDeposit(250).makeWithdrawal(50).makeWithdrawal(100).displayAccountInfo();