class Person{
    constructor (name = "No Name Provided", age = 0) {
        this.name = name;        
        this.age = age;
    };
    
    getGreeting(){
        return `Name: ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old!`
    }
};

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }
        return description; 
    }

}

class Traveller extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    location(){
        //use !! operator to return boolean value 
        return !!this.homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.location()){
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
}

const me = new Student("Steven", 29, "Computer Science");
console.log(me.getGreeting());
console.log(me.getDescription());
console.log("Has Major: ", me.hasMajor());

const me2 = new Traveller("Steven", 29, "Glasgow");
console.log(me2.getGreeting());

