// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E

// console.log(Math.floor(Math.random()*10)+1); //Generate Random number between 1 to 10

// ===================Math.ceil==============================
// let ceil = Math.ceil(-4.4); //Math.ceil always convert float value to Integer value of higher value 
// console.log(ceil); //4.5->5, 4.9->5, 3.6->4 
// Math.ceil for (-) negative -4.4->-4, -1.6->-1, -8.7->-8

// ======================Math.floor============================

//Mote floor is just opposite of Math.ceil
// let flor = Math.floor(2.13);  //Math.floor always convert float value to Integer value of lower value
// console.log(flor); //4.5->4, 4.9->4, 3.6->3
// Math.floor for (-) negative -4.4->-5, -1.6->-2, -8.7->-9

// ======================Math.round============================

// let rund = Math.round(-2.54);  //Math.round return higher value if float value is more than 5.5
// and return lower value if float value is less than 5.5
// console.log(rund); //Ex, 1.38->1, 2.57->3, 6.7->7, 8.2->8
// Math.round for (-) negative is same as above -4.4->-4, -1.6->-2, -8.7->-9, -5.3->-5


// ======================Math.trunc============================

// let trunc = Math.trunc(-5.44); //Math.trunc is only return Number that comes before (.)decimal
// console.log(trunc); //Ex, 3.44->3, 3.8->3, 4.63->4
// Math.round for (-) negative is same as above -4.4->-4, -1.6->-1, -8.7->-8, -5.3->-5

// ======================Math.max============================
//Always return max value from multiple values

// let max = Math.max(15,30,22,80,55,26); //Always return max value
// console.log(max);


// ======================Math.min============================
//Always return min value from multiple values

// let min = Math.min(15,30,22,80,55,26); //Always return min value
// console.log(min);


// ======================Math.sqrt============================
//Return squre root value=>3*3
// let sqrt = Math.sqrt(9); //return squre root of values
// console.log(sqrt);


// ======================Math.cbrt============================
//Return cubic(3) root value=>3*3*3
// let cbrt = Math.cbrt(27); //return cubic(3) root of values
// console.log(cbrt);


// ======================Math.pow============================
//Retuen power of values

// let pow = Math.pow(2,3); //2 ka power 3=>2*2*2
// console.log(pow);


// ======================Math.abs============================
//It convert negative(-) value to positive/absolute value
let abs = Math.abs(-3.66); //It convert negative to positive
let abs1 = Math.abs("-3.66"); // it track that is a number so it will return 3.66
let abs2 = Math.abs(null); // for null it will return 0
let abs3 = Math.abs("Vishal"); // it track that is a not a number so it will return NaN
console.log(abs1);  //=>O/p=>3.66