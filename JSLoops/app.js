// loops


// for(initialize;condition_check;post_increment){
//     block of statements
// }

// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }

// While Loop

// let num = 10;

// while (num >= 0) {
//     console.log(num);
//     num--;
// }

// for of loops

// let arr = ["red", "yellow", "Green", "Vilot"];

// for (let color of arr) {
//     console.log(color);
// }


// for-in loops

// const car = {
//     name: "Audi",
//     Price: 2000000,
//     haveDiscBrake: true
// }
// for (let item in car) {
//     console.log(item);
// }

const car = {
    name: "Audi",
    Price: 2000000,
    haveDiscBrake: true
}
for (let item in car) {
    console.log(`${item} --> ${car[item]}`);
}