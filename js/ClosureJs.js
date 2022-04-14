// // function main() {
// //     let counter = 0;
// //     return function add() {
// //         counter++;
// //         return counter;
// //     }
    
// // }

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
// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// let val = x();
// val();



//============More example======================
var p = 10;
function foo(){ //foo become a number just because of bar returning a number
    var q = 20;
    function bar(){
        var r = 15;
        var output = p+q+r;
        return output;
    }
    return bar;
}

let val = foo();
console.log(val());



