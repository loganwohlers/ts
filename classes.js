"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//we set our properties just in the body
var Person = /** @class */ (function () {
    //you can use a shortcut here-- public:username:string will create a public property AND auto asign username param to be the value of that property (instead of this.name=name type of thing)/  using yhe shortcut here for name AND username
    function Person(name, username) {
        this.name = name;
        this.username = username;
        //defaults to public so we don't NEED to specify
        //   public name: string;
        //typescript does private/public*** js doesn't
        //private only available inside the object
        this.type = "";
        //protected is same as private but also classes that inherited from this class can access protected- can initialize it up here- not just in constructor
        this.age = 0;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("baby");
    };
    //we can do private/public methods as well
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    return Person;
}());
var person = new Person("Logan", "LOGAN");
person.printAge();
console.log(person);
//inheritance
var Logan = /** @class */ (function (_super) {
    __extends(Logan, _super);
    //call super on the parent
    function Logan(username) {
        var _this = 
        //we just call it with a prefilled logan for the name but still have a username param
        _super.call(this, "logan", username) || this;
        //we can access age in the Logan class since it's protected
        _this.age = 24;
        return _this;
    }
    return Logan;
}(Person));
var logan = new Logan("LOGAN");
console.log(logan);
//getters and setters
var Plant = /** @class */ (function () {
    function Plant() {
        //we name the actual property something different from what we will call the setter/getter methods
        this._species = "default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        //typescript lets us make getters/setters.  the value will be auto assigned
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
//this auto calls the getter method we defined
console.log(plant.species);
//this auto calls the setter method we defined
plant.species = "green plant";
console.log(plant.species);
//static properties and methods
//helper classes can be used anywhwere w/ the static properties/methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumfrence = function (diameter) {
        return this.PI * diameter;
    };
    //static property can be accessed anywhere
    Helpers.PI = 3.14;
    return Helpers;
}());
//accessing our static property
console.log(Helpers.PI);
//accessing our static method
console.log(Helpers.calcCircumfrence(10));
//abstract classes
//they can not be instantiated directly.  they exist only to be inherited from.  provides set up for more specific children classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 100;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var IT = new ITProject();
console.log(IT);
IT.changeName("super project");
console.log(IT);
//private constructors:
// for singleton instances.  it has one static getInstance type method that checks whether or not there is an existing instance of the class and if there's not one it will call the private constructor.  otherwise it just returns the existing instance
//READONLY PROPERTIES
// public readonly name:string
//doesn't let us ever reassign it's value we can just get it
var Car = /** @class */ (function () {
    function Car(name, acceleration) {
        if (acceleration === void 0) { acceleration = 0; }
        this.name = name;
        this.acceleration = acceleration;
    }
    Car.prototype.honk = function () {
        console.log("honk");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk;
console.log(car.acceleration);
car.accelerate(100);
console.log(car.acceleration);
