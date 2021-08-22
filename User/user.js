class User {
    constructor ( userName, emailAddress ){
        this.name = userName;
        this.emailAddress = emailAddress;
        this.accountBalance = 0;
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
    }
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
    }
    displayBalance() {
        console.log(`Name: ${this.name}, Account Balance: ${this.accountBalance}`)
    }
}

const Nina = new User("Nina Rabei", "nina@gmail.com");
const Jane = new User("Jane Casian", "jane@gmail.com");
const Andrei = new User("Andrei Stoica", "andrei@gmail.com");

Nina.makeDeposit(150);
Nina.makeDeposit(100);
Nina.makeDeposit(250);
Nina.makeWithdrawal(200);
Nina.displayBalance();
Jane.makeDeposit(200);
Jane.makeDeposit(250);
Jane.makeWithdrawal(50);
Jane.makeWithdrawal(100);
Jane.displayBalance();
Andrei.makeDeposit(300);
Andrei.makeWithdrawal(50);
Andrei.makeWithdrawal(75);
Andrei.makeWithdrawal(25);
Andrei.displayBalance();
