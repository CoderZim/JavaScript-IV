/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


//Refactored
class GameObject{
    constructor(gameObjectAttr){
        this.createdAt = gameObjectAttr.createdAt;
        this.dimensions = gameObjectAttr.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;  
    }
}

//Refactored
class CharacterStats extends GameObject{
    constructor(charStatAttr){
        super(charStatAttr);
        this.healthPoints = charStatAttr.healthPoints;
        this.name = charStatAttr.name;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}

//Refactored
class Humanoid extends CharacterStats{
    constructor(humanAttr){
        super(humanAttr);
        this.team = humanAttr.team;
        this.weapons = humanAttr.weapons;
        this.language = humanAttr.language;
    }
    greet() {
        return `${this.name} offers greeting in ${this.language}`;
    }
}


// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

class Villain extends Humanoid{
    constructor(evilAttr){
        super(evilAttr);
        this.hiFiveOfDoom = evilAttr. hiFiveOfDoom;
    this.opponentHealth = evilAttr.opponentHealth;
    }
    magicalToot(){
        this.opponentHealth -= 10;
        return `The villian ${this.name} laughs and says I have released the magical toot and soon you will be defeated!`;
    }
}

class Hero extends Humanoid{
    constructor(heroAttr){
        super(heroAttr);
        this.shortBrave = heroAttr.shortBrave;
        this.opponentHealth = heroAttr.opponentHealth;
    }
    specialBeam(){
        this.opponentHealth -=20;
        return `The hero ${this.name} releases special beam cannon`;
    }
    jazzHands(){
        this.opponentHealth -=50; 
        return `The hero ${this.name} uses Jazz Hands`
    }
    finishHim(){
        this.opponentHealth-= 30;
        return `The hero learns to program using his weapons ${this.weapons}... and defeats the villian`;
    }
}
const mightyShort = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 2,
  },
  healthPoints: 10,
  name: 'Mighty Short',
  faction: 'Forest Kingdom',
  weapons: [
    'jazz hands', 'low center of gravity', 'special beam cannon', 'and sweep low'
  ],
  language: 'Irken',
  goodLooks: 'High',
  opponentHealth: 100
});

const sly = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Sly Dodger',
  faction: 'Forest Kingdom',
  weapons: [
    'high 5 of doom','magical toot',' and laser gun'
  ],
  language: 'Pootanese',
  hiFiveOfDoom: 'Sugar Bomb',
  opponentHealth: 100
});


console.log("A new villain appears. Our hero stands ready for battle.")
console.log(`The match ${mightyShort.name} vs ${sly.name} has begun.`);
console.log(`The villian has the following weapons ${sly.weapons}`);
console.log(`The hero has the following weapons ${mightyShort.weapons}`); 
console.log(`The villian has the following extra attribute ${sly.hiFiveOfDoom}`); 
console.log(`The villian speaks the following language ${sly.language}`);
console.log(`The hero speaks the following language ${mightyShort.language}`);
console.log(sly.magicalToot());
console.log(`${mightyShort.name} has been reduced, ${mightyShort.name} now has ${sly.opponentHealth}`);
console.log(mightyShort.specialBeam());
console.log(`${sly.name} has been reduced, ${sly.name} now has ${sly.opponentHealth}`);
console.log(mightyShort.jazzHands());
console.log(`${sly.name} has been reduced, ${sly.name} now has ${mightyShort.opponentHealth}`) ;
console.log(mightyShort.finishHim()); 
console.log(`${sly.name} has been reduced, ${mightyShort.opponentHealth} now has ${mightyShort.opponentHealth}`);
console.log(`${mightyShort.name} wins and gains control of the forest!`); 