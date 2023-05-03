//Test if Script is working
console.log("Hello World");

// Declare and Intialize the Variable

let test = 9;

console.log(`the test is ${test}`);

test = 12;

console.log(`the test is ${test}`);

test = 'text';
console.log(`the test is ${test}`);


// ***************************
// *** Number Variables *** //
// ***************************


// += itself plus value
let plants = 15;

plants += 2;


// ************************************
// *** Number Variables Practical *** //
// ************************************

let motorcycles = 9;
let cars = 0;
let vehicles = cars + motorcycles;
console.log(`Bikes: ${motorcycles}`);
console.log(`Vehicles: ${vehicles}`);
//Decrement

motorcycles--;
console.log(`Bikes: ${motorcycles}`);

cars += 2;
console.log(`Cars: ${cars}`);


// ************************************
// *** String Variables Practical *** //
// ************************************
let catName = 'Andrew';
let catAge = 3;
//Two way of Concating for Console
console.log('The cat name is', catName);
console.log(`The cat name is ${catName}`);


let sentance = 'this is a sentence about the cat named' + catName;
console.log(sentance);

sentance = 'The cat is ' + catAge + ' years old';
console.log(sentance);

console.log(`the Cat is ${catAge} years old.`)

catName = 'Ruby';
catAge = 12;

sentance = 'Later on, A different cat is ' + catAge + ' old and is named ' + catName;
console.log(sentance);
