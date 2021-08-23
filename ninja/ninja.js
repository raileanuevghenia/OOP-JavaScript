class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
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

const ninja1 = new Ninja("Jane", 5);
const ninja2 = new Ninja("Nina", 20);

ninja1.sayName().showStats().drinkSake();
ninja2.sayName().showStats().drinkSake();