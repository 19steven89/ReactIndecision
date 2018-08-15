const add = function(a, b){
    console.log(arguments);
    return a + b;
}
const add2 = (a, b) => {
    return a + b;
};

const add3 = (a, b) => a + b;

console.log(add(55, 10));

const user = {
    name: "Steven",
    cities: ["Glasgow", "Paris", "Milan"],

    //new syntax for defining a function in js objects
    printPlacesLived() {
        //map the cities to the city variable which holds an instance of each city and print the city at the end of the statement
        return this.cities.map((city) => this.name + " has lived in " + city);

        //another way of doing the above function
        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in " + city);
            
        // });
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [4, 8, 12],
    multiplyBy: 2,

    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy)
    }
};

console.log(multiplier.multiply());
