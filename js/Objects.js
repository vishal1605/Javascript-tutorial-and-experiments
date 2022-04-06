var a = [
    {
        fname: "Vishal",
        lname: "gupta",
        age: 25,
        favMovies: ["avengers", "iron-man", "don"],
        cars: {
            car1: "Ford",
            car2: "BMW",
            car3: "Fiat"
        }
    },
    {
        fname: "Sahil",
        lname: "singh",
        age: 26,
        favMovies: ["free guy", "joker", "tenet"],
        cars: {
            car1: "Suzuki",
            car2: "Honda",
            car3: "Jaguar"
        }
    },
    {
        fname: "Nitesh",
        lname: "gupta",
        age: 25,
        favMovies: ["dune", "hulk", "logan"],
        cars: {
            car1: "Tvs",
            car2: "Kia",
            car3: "Hundai"
        }
    },
    {
        fname: "Anjali",
        lname: "korjal",
        age: 25,
        favMovies: ["wonder woman", "matrix", "gone wild"],
        cars: {
            car1: "Tata",
            car2: "Audi",
            car3: "mercedes"
        }
    },
    {
        fname: "Ravi",
        lname: "yadav",
        age: 27,
        favMovies: ["x-man", "the godfather", "spider-man"],
        cars: {
            car1: "Tata",
            car2: "Mahindra",
            car3: "Toyota"
        },
        fullName:function(){
            return this.fname;
        }
    }
];

// var law =a.filter(myName=> {
//     return myName['fullName']();
// });
// console.log(law);


// var val = a.filter(person=>{
//     return person.favMovies.some(law);
// });

// function law(el){
//     return el=="spider-man";
// }
// console.log(val);



// ===========================For-In-Loop=========================================
// for (var key in a) {
//     console.log(a[key]);
    
// }

// const fil = 'x-man';
// // var values = a.filter((movieName) => {
// //     return (movieName.favMovies.some(fill=>{
// //        return fill=='matrix';
// //     }));
// // });
// var values = a.filter(persons=>{
//     return persons.favMovies.find(el=>{
//         return el=='hulk';
//     });

// });
// console.log(values);


// ==============================Map-Method========================================
//Map :-- Map method is used for fetch single properties from Array of Objects
// var myName = a.map((fName) => {
//     return fName.favMovies == "hulk"
// })

// console.log(myName);

// =================================Create object using 2nd type================================

// var info = new Object();
// info.firstName = "Vishal";
// info.lastName = "Gupta";
// info.cars = function() {
//     console.log(this.lastName);
    
// }

// console.log(info.cars());

// let b = JSON.stringify(a);
// console.log(b);

 let h = a.filter(per=>{
    return per.fullName;
})
console.log(h);