// function x(params) {
//     console.log("x");
//     params();
    
// }

// x(function y() {
//     console.log("Y");
// })


// Level-2 Example

const radius = [3,1,2,4]
// let value = radius.map((diameter)=> diameter*2);
// console.log(value);

const area = function(radius){
    return Math.PI*radius*radius;
};
const circumference = function(radius){
    return Math.PI*2*radius;
};
const diameter = function(radius){
    return 2*radius;
};

// const calculate = function(radius, logic){
//     const output = [];
//     for (let index = 0; index < radius.length; index++) {
//         output.push(logic(radius[index]))
        
//     }
//     return output;
// };

// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));
// console.log(calculate(radius, area));

//====================Make calculate function as a map function=============
//Note:- Using Array.prototype it links function to all Array

Array.prototype.calculate = function(logic){
    const output = [];
    for (let index = 0; index < this.length; index++) {
        output.push(logic(this[index]))
        
    }
    return output;
};

console.log(radius.calculate(diameter));
