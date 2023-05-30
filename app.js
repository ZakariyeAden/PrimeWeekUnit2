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
// Plants is now 17

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




// ************************************
// *** Conditionals Practical *** //
// ************************************

let seatsInCar = 4;
let passenger = 2;
let infants = 1;
let infantsSeats = 0;
let fullTank = true;

//Check if there is enough room and Tank
if(seatsInCar >= passenger && infantsSeats >= infants){
  console.log('Ready for the Road Trip!');
} else if(fullTank){
  console.log('Ready for Road Trip with Full Tank')
}else{
  console.log('Not Ready, Check passengers, Infants seats or Gas');
 }


 //*************** */
//  Time Management
//*************** */
// Priotirize your schedule and stay away from distractions.
// Break your weekly goals into small tasks (no more than 30, 45, 60min in length).
// Prioritize. Do critical tasks now. Decrease/Stop unnecessary tasks.
// Schedule daily tasks using a calendar tool.
// Find tools and systems that meet your needs.
// Time Management is an individual process. Recognize when you're having a trouble organizing your time.
// Ask us for help!