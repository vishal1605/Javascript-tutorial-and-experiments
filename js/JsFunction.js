// ============Self invoking function========================
// (function(a,b){
//     console.log(a*b);

// })(4,2);



// ===============Function are objects========================
// function myFunction(a, b) {
//     return arguments.length;
// }

// var val = myFunction(4, 7);
// console.log(val);

// ==============
// function myFunction(x, y) {
//     if (y === undefined) {
//         y = 2;
//         console.log(y);
//     }
// }


// ==========Find max value in function Arguments=============

// function findMax() {
//     let max = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }

// var maxValue = findMax(4, 1, 3, 2, 8, 5, 12);
// console.log(maxValue);

//===============Sum of arguments===============

// function findMax() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// var maxValue = findMax(5, 12);
// console.log(maxValue);

//===========Function invocation===============

function myFunction(a, b) {
    return a * b;
}
myFunction(10, 2);

// ===========Function constructor===========
// This is a function constructor:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}

// This creates a new object
const myObj = new myFunction("John", "Doe");

// This will return "John"
console.log(myObj.firstName);


// Some example of function
var sum = function xyz(a, b) {
    let c = a + b;
    console.log(c);
    console.log(xyz);
    
}

sum(5,3);