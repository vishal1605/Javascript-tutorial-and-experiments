function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function() {
        return this.firstName+" "+this.lastName;
        
    }
}

var per1 = new Person("Vishal", "Gupta", 25);

Person.motherName = "Usha"; // This is wrong way to add property in Object Constructor

per1.motherName = "Usha"; // The right way to add property in object Constructor

Person.prototype.favColor = 'blue';


console.log(per1.favColor);
