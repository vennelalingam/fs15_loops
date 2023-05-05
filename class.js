// While loop
// given condition should fail to not get stuck in an infinte loop

// let count = 1;
// while (count <= 10) {
//     console.log(count);
//     count++;
// }

// for loop..

// for(let count = 1; count <= 5; count++){
//     console.log(count);
// }

// let x = "";
// for (let count = 10; count >= 0; count--) {
//     x += `${count}...`
// }
// x += "blast off!";
// console.log(x); // 10...9...8...7...6...5...4...3...2...1...0...blast off!

// while loop
// let counter = 1;
// while (counter <= 5) {
//     console.log(counter);
//     counter++;
// }

// let count = 1;
// let y = "";

// while (count <= 4) {
//     console.log({count, y})
//     y += "ha";
//     count++;
// }
//  When to use which loop..?

// For: For loops are best used 
//when you know exactly how many 
//times a loop should run.

//While: while is used when u want 
//the loop to break based on a condition
//other than the number of times it runs.

// .random => gives a random number 
// with every refresh
// function getRandomInt(max){
//     return Math.floor(Math.random() * max);
// }
// // console.log(getRandomInt(10));

// let looping = true;
// while(looping){
//     const randomNumber = getRandomInt(10);
//     // console.log(randomNumber < 5 ? "tails" : "heads")
//     if (randomNumber < 5) {
//         console.log("tails")
//         looping = false;
//     }
//     else console.log("heads")
// }

// Do While Loop - Never use
// do while loop runs atleast once and keeps 
//checking the condition to loop or stop 
// let count = 1;
// do {
//     console.log(count);
//     count++;
// }
// while (count <= 5);