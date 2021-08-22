class User {
    constructor ( userName, emailAddress ){
        this.name = userName;
        this.emailAddress = emailAddress;
        this.accountBalance = 0;
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
        return this;
    }
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
        return this;
    }
    displayBalance() {
        console.log(`Name: ${this.name}, Account Balance: ${this.accountBalance}`)
        return this;
    }
}

const Nina = new User("Nina Rabei", "nina@gmail.com");
const Jane = new User("Jane Casian", "jane@gmail.com");
const Andrei = new User("Andrei Stoica", "andrei@gmail.com");

Nina.makeDeposit(150).makeDeposit(100).makeDeposit(250).makeWithdrawal(200).displayBalance();
Jane.makeDeposit(200).makeDeposit(250).makeWithdrawal(50).makeWithdrawal(100).displayBalance();
Andrei.makeDeposit(300).makeWithdrawal(50).makeWithdrawal(75).makeWithdrawal(25).displayBalance();