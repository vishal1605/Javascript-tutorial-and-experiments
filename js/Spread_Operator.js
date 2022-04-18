// let arr = [8.2,4,6.3,5,2,7]
// function sum(...params) {
//     params.forEach(val=>console.log(val))
    
// }

// // Note: Means In spread Operator you have to provide (...) in passing arrguments like below
// sum(...arr); //This is Spread Operator 


// =======================Copying an array using Spread Operator=====================


// Wrost way to copy an array
// let arr = [8.2,4,6.3,5,2,7];
// let newArr = arr;
// console.log(newArr);
// newArr.push(9);
// console.log(newArr+" Copied array");
// console.log(arr+" original Array");

// ====Best way to copy an array=========
// let newArr = [...arr];
// console.log(newArr);
// newArr.push(9);
// console.log(newArr+" Copied array");
// console.log(arr+" original Array");



// ======================Concat Array Using Spread Operator============================

// let arr1 = [3,8,4,5];
// let arr2 = [5,6,9,8,1];

// let concatArray = arr1.concat(arr2); //concat array without using spread operator
// // console.log(concatArray);

// let spreadConcat = [...arr1, 2.9, 7.9, 88];
// let spreadConcat1 = [...arr1, ...arr2];
// console.log(spreadConcat);
// console.log(spreadConcat1);



// ============Printing array directly and using Spread Operator=================
// let arr = [8.2 ,4 ,6.3 ,5 ,2 ,7];
// console.log(arr);
// console.log(...arr, "SpreadOperator");  //Spreat Operator
// console.log([...arr], "SpreadOperator In Array");  //Spreat Operator in Array




// ================================Spread Operator use in Object==============================

let obj1 = {
    name:"Vishal"
}
let obj2 = {
    age:26
}

console.log(obj2, "Original 2nd Operator");
// let obj3 = {...obj1,...obj2, "lastName":"Gupta"};  //ou can also write like this
let obj3 = {...obj1,...obj2, lastName:"Gupta"};
console.log(obj3, "Copied And Merge Object using Spread Operator");

