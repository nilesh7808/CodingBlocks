// function fun(a) {

//     console.log(a);

// }

// fun(10);

// ---------------------- ###################################### ----------------------

// function fun(a) {

//     // console.log(a);
//     a();

// }

// function innerFun() {
//     console.log("Inside InnerFun");
// }

// fun(innerFun);

// ---------------------- ###################################### ----------------------

// function fun() {

//     // console.log(a);
//     function innerFun() {
//         console.log("Inside InnerFun.");
//     }
//     innerFun();

// }

// fun();

// ---------------------- ###################################### ----------------------

// function fun() {

//     // console.log(a);
//     function innerFun() {
//         console.log("Inside InnerFun.");
//     }
//     return innerFun;

// }

// let x = fun();
// console.log(x);

// ------------------------ ###################################### ----------------------

// Or can also return by this method

// function fun() {

//     // console.log(a);
//     return function innerFun() {
//         console.log("Inside InnerFun.");
//     }


// }

// let x = fun();
// // console.log(x);
// x();



function fun() {

    return function innerFun() {

        console.log("Inside inner fun");

    }



}

let x = fun();
console.log(x);