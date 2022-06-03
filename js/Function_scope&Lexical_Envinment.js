// lexical scope/environment:-- Lexical in general means in hierarchy or in a sequence
// OR
// Whenever a excution context in created a Lexical Environment is aslo created, You also get a refernece to the
// lexical environment of its parent, along with its parent address/lexical scope of parent



// for(let i=0; i<3; i++){
//     var a = 3;
//     console.log(a);
// }
// console.log(a+" = Outside");

// function a() {
//     var b = "Vishal"; //Inside of function if any variable declared it cant access outside of the function scope

// }

// a();
// console.log(b);

// function a() {
//     console.log(b);

// }

// a();
// var b = "Vishal";

// function b() {
//     console.log(q);
// }

// function a() {
//     console.log(q);
//     var q = 1;
//     b();
// }

// q = 2;
// a();

// function someNum() {
//     return 3;
    
// }

// function evenOdd(params) {
//     if (params()%2==0) {
//         console.log("even");
//     } else {
//         console.log("even");
        
//     }
    
// }
// evenOdd(someNum);
