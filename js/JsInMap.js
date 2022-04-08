// Method	    Description
// new Map()	Creates a new Map
// set()	    Sets the value for a key in a Map
// get()	    Gets the value for a key in a Map
// delete()	    Removes a Map element specified by the key
// has()	    Returns true if a key exists in a Map
// forEach()	Calls a function for each key/value pair in a Map
// entries()	Returns an iterator with the [key, value] pairs in a Map
// Property	    Description
// size	        Returns the number of elements in a Map

//First way to create Map in Js

let fruits = new Map();
fruits.set("apple", 110);
fruits.set("grapes", 90);
fruits.set("pineApple", 55);
fruits.set("banana", 40);
fruits.set("Stawberry", 150);
// fruits.set("Stawberry", 190); //If you try to duplicate key in Map then it consider only last value

// fruits.forEach((val, key)=>console.log(val+" :"+key));

// fruits.set('Stawberry', 200); // Set new value Or update exsiting value using key
// console.log(fruits.get('banana')); // get specific value using key

// fruits.delete('pineApple'); //Deleting value using key
// console.log(fruits.has('pineApple'));
// console.log(fruits.size);

for (const x of fruits.entries()) {
    console.log(x);
  }
