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

const Bank1 = new BankAccount();
const Bank2 = new BankAccount(0.06, 300);

Bank1.deposit(300).deposit(100).deposit(100).withdraw(200).yieldInterest().displayAccountInfo();
Bank2.deposit(50).deposit(50).withdraw(100).withdraw(75).withdraw(50).withdraw(125).yieldInterest().displayAccountInfo();