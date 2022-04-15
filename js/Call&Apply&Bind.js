const person = {
    firstName:"Vishal",
    lastName:"Gupta",
    fullName: function (language) {
        console.log(`My name is ${this.firstName} ${this.lastName}. And i am learning ${language}.`);
        
    }
}

const person2 = {
    firstName:"Sahil",
    lastName:"Singh",
    
}

// let fullName = function (language1) {
//     console.log(`My name is ${this.firstName} ${this.lastName}. And i am learning ${language1}.`);
    
// }

person.fullName.call(person, "Java");
fullName.call(person2, "Java");

// =============================Apply method=====================================

//Apply()method is same as call() method, difference is that in Apply you can pass an Array as a argument

// fullName.apply(person, ["python", "javaScript"]);
// fullName.apply(person2, ["Java"]);




// =============================Bind method=====================================

//Bind() method is same as call()& Apply() method, Just difference is that you have to assign a new variable

// let info = fullName.bind(person, ["python", "javaScript"]);
// info();

// let info2 = fullName.bind(person2, "Java");
// info2();

//Using Bind() you can use use single variable object like String,Number, Boolean as well as Array object