// Closure:-- Function alsong with its lexical scope forms a Closure.
//                     OR
//            A Closure is a combination of a function bundled together (enclosed) with reference 
//            to its surrounding state (the lexical environment). In other words a closure give you access to an
//            outer function's scope from an inner function. 



function main() {
    let counter = 0;
    return function add() {
        counter++;
        return counter;
    }
    
}

// //OR you can also do like this

// function main() {
//     let counter = 0;
//    function add() {
//         counter++;
//         return counter;
//     }
//     return add;
    
// }
// let count = main();
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());


//============More example======================
function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
    // y();
    return y;
}

// x();
let val = x();
val();



//============More example======================
// var p = 10;
// function foo(){ //foo become a number just because of bar returning a number
//     var q = 20;
//     function bar(){
//         var r = 15;
//         var output = p+q+r;
//         return output;
//     }
//     return bar;
// }

// let val = foo();
// console.log(val());



