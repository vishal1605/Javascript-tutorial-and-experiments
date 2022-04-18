// const names = ["Vishal", "Sahil", "Nitesh", "Lavkush", "Amit", "Sumit"];
// const marks = [49, 57, 76, 59, 61, 69];

// let [name1, name3, ...name2] = names;
// console.log(name1);
// console.log(name2);
// console.log(name3);


// let newArray = [...names, ...marks]
// console.log(newArray);


// ====================Another Example of Destructre================

// function addMultiply(a, b) {
//     return [a+b, a*b];
    
// }

// let [add, multiply, divison='no divison'] = addMultiply(5,3);
// console.log(add);
// console.log(multiply);
// console.log(divison);



// =========================Destructre Object Example===========================

const obj1 = {
    name: "Sahil",
    age: 27,
    address:{
        city:"Titwala",
        state: "Maharashtra"
    }
}
const obj2 = {
    name: "Vishal",
    age: 26,
    address:{
        city:"Kalyan",
        state: "Maharashtra"
    }
}

// const  {name:myName='Ravi', age } = obj1;  //name:myName is use when you want to use different key instead of name
//name:myName='Ravi' ==> Is a Default name if object doesnt have any Name so Ravi will be printed
// console.log(myName);

// const  {name:myName='Ravi', age, favColor='Orange', ...addresses} = obj1; //If you want to add a extra property And get all remaining
//property using Spread Operator
// console.log(favColor);
// console.log(addresses);


const {name, address:{state}} = obj2;

console.log(state);