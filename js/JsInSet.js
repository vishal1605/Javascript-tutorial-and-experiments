// Method   	Description
// new Set()	Creates a new Set
// add()	    Adds a new element to the Set
// delete()	    Removes an element from a Set
// has()	    Returns true if a value exists in the Set
// forEach()	Invokes a callback for each element in the Set
// values()	    Returns an iterator with all the values in a Set
// Property	    Description
// size	        Returns the number of elements in a Set

// Creating a Set in JS
// 1) First type of creation
let firstSet = new Set();
firstSet.add(3);
firstSet.add(4);
firstSet.add(5);
firstSet.add(6);
firstSet.add(7);
firstSet.add(2);
firstSet.add(8);
// firstSet.add(8); // It wont allow duplicates just like Java set

// firstSet.forEach(val=>console.log(val));
// console.log(firstSet);
// firstSet.delete(2); // It delete particular value that you have given
// var bol = firstSet.has(2); // It tells you the give value is present or not in "Set"
// console.log(bol);
// console.log(firstSet);

//Values()
// let newSet = firstSet.values();
// console.log(newSet);

// 2) Second way to create Set
let secSet = new Set([2,4,9,5,3,7,1]);
console.log(secSet.size);

