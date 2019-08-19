//we set our properties just in the body
class Person {
  //defaults to public so we don't NEED to specify
  //   public name: string;

  //typescript does private/public*** js doesn't
  //private only available inside the object
  private type: string = "";

  //protected is same as private but also classes that inherited from this class can access protected- can initialize it up here- not just in constructor
  protected age: number = 0;

  //you can use a shortcut here-- public:username:string will create a public property AND auto asign username param to be the value of that property (instead of this.name=name type of thing)/  using yhe shortcut here for name AND username
  constructor(public name: string, public username: string) {}

  printAge() {
    console.log(this.age);
    this.setType("baby");
  }

  //we can do private/public methods as well
  private setType(type: string) {
    this.type = type;
  }
}

const person = new Person("Logan", "LOGAN");

person.printAge();
console.log(person);

//inheritance
class Logan extends Person {
  //call super on the parent
  constructor(username: string) {
    //we just call it with a prefilled logan for the name but still have a username param
    super("logan", username);
    //we can access age in the Logan class since it's protected
    this.age = 24;
  }
}

const logan = new Logan("LOGAN");
console.log(logan);

//getters and setters
class Plant {
  //we name the actual property something different from what we will call the setter/getter methods
  private _species: string = "default";

  //typescript lets us make getters/setters.  the value will be auto assigned
  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "default";
    }
  }

  get species() {
    return this._species;
  }
}

let plant = new Plant();
//this auto calls the getter method we defined
console.log(plant.species);

//this auto calls the setter method we defined
plant.species = "green plant";
console.log(plant.species);

//static properties and methods

//helper classes can be used anywhwere w/ the static properties/methods
class Helpers {
  //static property can be accessed anywhere
  static PI: number = 3.14;
  static calcCircumfrence(diameter: number): number {
    return this.PI * diameter;
  }
}
//accessing our static property
console.log(Helpers.PI);
//accessing our static method
console.log(Helpers.calcCircumfrence(10));

//abstract classes
//they can not be instantiated directly.  they exist only to be inherited from.  provides set up for more specific children classes
abstract class Project {
  projectName: string = "Default";
  budget: number = 100;

  //abstract method means we will NEED to have a changeName method on the subclass but we will need to fill it in there w/ the same param/return types
  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

const IT = new ITProject();
console.log(IT);
IT.changeName("super project");
console.log(IT);

//private constructors:
// for singleton instances.  it has one static getInstance type method that checks whether or not there is an existing instance of the class and if there's not one it will call the private constructor.  otherwise it just returns the existing instance

//READONLY PROPERTIES

// public readonly name:string
//doesn't let us ever reassign it's value we can just get it

class Car {
  constructor(public name: string, public acceleration: number = 0) {}

  honk(): void {
    console.log("honk");
  }

  accelerate(speed: number): void {
    this.acceleration += speed;
  }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(100);
console.log(car.acceleration);
