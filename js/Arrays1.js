// var array2 = new Array(6,7,9,8,5);
// array2.forEach(val=> console.log(val));
// var arr = [4,9,10]
// var array1 = new Array();
// array1.push(2);
// array1.push(1);
// array1.push(8);
// array1.push(5);
// array1.push(3);
// array1.push(8);
// array1.forEach(value => {
//     // console.log(value);
//     var index = array1.indexOf(value);
//     console.log(value+" : "+index);
// });
// console.log(array1);
// array1.sort();  //Sort in Assending order
// console.log(array1+" :sort");

// array1.reverse();  //Its reverse the order
// console.log(array1+" :reverse");

// array1.pop();  //Delete Last value from Array

// console.log(array1+": Pop");

// ==================================================================================
// New Example

// var obj = ["Sahil", "Riwan", "Amit","Anjali", "Sumit"];
// console.log(obj);

// delete obj[0];

// console.log(obj);

// ==================================================================================
// New Example

// var obj = ["Sahil", "Riwan", "Amit","Anjali", "Sumit"];
// obj.shift(); //Delete always first element from Array 
// console.log(obj);

// obj.unshift("Vishal");  //insert always element in the first place

// console.log(obj);

// ==================================================================================
// New Example

// var obj = ["Sahil", "Riwan", "Amit","Anjali", "Sumit"];
// var obj1 = ["Sawapnil", "Aniket", "Varsha"];
// var obj2 = ["Nitesh", "Bhushan", "Sandeep"];

// // var newObj = obj.concat(obj1,obj2);
// var newObj = obj.concat("Rajesh", "Satya");
// console.log(newObj);


// ==================================================================================
//Join

// var obj = ["Sahil", "Riwan", "Amit","Anjali", "Sumit"];
// var obj1 = ["Sawapnil", "Aniket", "Varsha"];
// var obj2 = ["Nitesh", "Bhushan", "Sandeep"];
// console.log(obj);
// var joins = obj.join("||");

// console.log(joins);

// ==================================================================================
// Slice 

// var obj = ["Sahil", "Riwan", "Amit","Anjali", "Sumit"];
// var value = obj.slice(0,3); //Slice is used for making new array using of existing array
// console.log(value);        // Just provide a (starting index, end index)
//O/P==>[ 'Sahil', 'Riwan', 'Amit' ]



// ==================================================================================
// Splice

// var obj = ["Sahil", "Riwan", "Amit","Anjali", "Sumit"];
// obj.splice(2,0,"Vishal"); //Splice is used for deleting value from array using their
// console.log(obj);       // index number or you can add another value on some specfic index
// // O/P==>[ 'Sahil', 'Riwan', 'Vishal', 'Amit', 'Anjali', 'Sumit' ]  //Refer this ex, and o/p

// obj.splice(2,0,"Vishal");  // 2:-Index number, 0:-Number of values you want to delete after the index
                            // "Vishal":-insert the new value on the given index


// ==================================================================================
// Check Array is array or not

// var a = 15;
// var obj = ["Sahil", "Riwan", "Amit","Anjali", "Sumit"];
// var b = Array.isArray(obj);
// var c = Array.isArray(a);
// console.log(b);
// console.log(c);


// ==================================================================================
// Array.indexOf();

// var obj = ["Sahil", "Riwan", "Amit", "Riwan","Anjali", "Sumit"];
// var ind = obj.indexOf("Riwan", 2); //IndexOf:-- id used for searching object is already exist in array or not
// console.log(ind);                 // "Riwan":-- it is a object to be searched;
                                // 2:- is a which index number to start search the object

// ==================================================================================
// lastIndexOf
//It is also used for searching the object/value is exist in array but its always start from last index
// var obj = ["Sahil", "Riwan", "Amit","Anjali", "Sumit"];
// var val = obj.lastIndexOf("Amit",1); //Always start from last index
// console.log(val);

// ==================================================================================
// Find Array ==>It is provide you only one value that match the conditon
// var obj = [10, 12, 19, 17, 25];
// var value = obj.find((age)=>{
//     return (age>=15) && (age<=20);

// });
// console.log(value);


// ==================================================================================
// FindIndex Array ==>It is provide you only one index of that value that match the condtion
// var obj = [10, 12, 19, 17, 25];
// var value = obj.findIndex((age)=>{
//     return (age>=15) && (age<=20);

// });
// console.log(value);


// ==================================================================================
// Filter Array 
// var obj = [10, 12, 19, 17, 25];
// var value = obj.filter((age)=>{
//     return (age>=15) && (age<=20);

// });
// console.log(value);
