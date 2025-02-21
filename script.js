class Animal {
    private _species: string;

    constructor(species: string) {
        this._species = species;
    }

    // Getter to return the species of the animal
    get species(): string {
        return this._species;
    }

    // Method to log the sound message
    makeSound(): void {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Cat Class that inherits from Animal
class Cat extends Animal {
    constructor(species: string) {
        super(species); // Calling the constructor of the Animal class
    }

    // Method to log "purr"
    purr(): void {
        console.log('purr');
    }
}

// Dog Class that inherits from Animal
class Dog extends Animal {
    constructor(species: string) {
        super(species); // Calling the constructor of the Animal class
    }

    // Method to log "woof"
    bark(): void {
        console.log('woof');
    }
}

// Check if running in a browser environment, and attach classes to window if so
if (typeof window !== 'undefined') {
    window.Cat = Cat;
    window.Dog = Dog;
    window.Animal = Animal;
}

// Example Usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Expected Output: The Siamese makes a sound
myCat.purr();      // Expected Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Expected Output: The Golden Retriever makes a sound
myDog.bark();      // Expected Output: woof
