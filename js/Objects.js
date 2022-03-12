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
        fullName : function(){
            console.log("Ravi");;
        }
    }
];

var law =a.filter(myName=> {
    return myName['fullName']();
});
console.log(law);


// var val = a.filter(person=>{
//     return person.favMovies.some(law);
// });

// function law(el){
//     return el=="spider-man";
// }
// console.log(val);

















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
