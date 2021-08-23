class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`Ninjas name is: ${this.name}`)
        return this;
    }
    showStats(){
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
        return this;
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.name} just drank sake and his health is ${this.health}`);
        return this;
    }

}

class Sensei extends Ninja {
    constructor(name,health = 200,speed = 10, strength = 10, wisdom = 10 ){
        super(name, health, speed, wisdom);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        return this;
    }
}

const ninja1 = new Ninja("Jane", 5);
const ninja2 = new Ninja("Nina", 20);

ninja1.sayName().showStats().drinkSake();
ninja2.sayName().showStats().drinkSake();

const sensei1 = new Sensei("Sensei Andrei");
sensei1.showStats().speakWisdom();
