// Do...while loop
// given condition should fail to not get stuck in an infinte loop

// let count = 1;
// while (count <= 10) {
//     console.log(count);
//     count++;
// }

// for loop..

for(let count = 1; count <= 5; count++){
    console.log(count);
}

let x = "";
for (let count = 10; count >= 0; count--) {
    x += `${count}...`
}
x += "blast off!";
console.log(x); // 10...9...8...7...6...5...4...3...2...1...0...blast off!